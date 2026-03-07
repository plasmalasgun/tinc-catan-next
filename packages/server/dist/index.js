import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { GameManager } from './GameManager.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });
const gameManager = new GameManager();
// ---------------------------------------------------------------------------
// SHARED LOG FORMAT
//
// Both the terminal (console.log) and the Vue DevConsole display the same
// structured entry:
//
//  [HH:MM:SS] 🔴 Agent_ag3b
//    REQ {"action_id":"abc123","user":"Agent_ag3b","type":"ROLL_DICE","payload":{}}
//    RES {"action_id":"abc123","success":true,"message":"Rolled a 6."}
//
// The `new_log_entry` socket event carries this same object so the Vue
// component can render it identically.
// ---------------------------------------------------------------------------
function buildLogEntry(payload, state) {
    const { playerId, action, actionId, result } = payload;
    // Resolve display name and color from the state
    const seat = state.players.find((p) => p.controllerId === playerId || p.id === playerId);
    const playerName = seat?.name ?? playerId;
    const playerColor = seat?.color ?? '#ffffff';
    const ts = new Date();
    const timeStr = ts.toTimeString().slice(0, 8); // "HH:MM:SS"
    const request = {
        action_id: actionId,
        user: playerName,
        type: action.type,
        payload: action.payload ?? {},
    };
    const response = {
        action_id: actionId,
        success: result.success,
        message: result.message ?? '',
        ...(result.followUp ? { followUp: result.followUp } : {}),
    };
    // ── Terminal output (uniform with Vue console) ──────────────────────
    const colorIcon = COLOR_ICONS[playerColor] ?? '⚪';
    console.log(`[${timeStr}] ${colorIcon} ${playerName}`);
    console.log(`  REQ ${JSON.stringify(request)}`);
    console.log(`  RES ${JSON.stringify(response)}`);
    // ── Socket payload (consumed by CommandConsole.vue) ─────────────────
    return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: ts.getTime(),
        type: 'ACTION',
        timeStr,
        playerId: seat?.id ?? playerId,
        playerName,
        playerColor,
        actionId,
        request,
        response,
    };
}
/** Maps hex color to a Unicode emoji block for the terminal */
const COLOR_ICONS = {
    '#e74c3c': '🔴',
    '#e67e22': '🟠',
    '#f1c40f': '🟡',
    '#27ae60': '🟢',
    '#3498db': '🔵',
    '#9b59b6': '🟣',
    '#8b4513': '🟤',
    '#ffffff': '⚪',
    '#111111': '⚫',
};
// ---------------------------------------------------------------------------
// CENTRAL BROADCAST — fires for EVERY action (human or agent)
// ---------------------------------------------------------------------------
gameManager.on('action_success', async (payload) => {
    const { gameId, newState } = payload;
    const logEntry = buildLogEntry(payload, newState);
    io.to(gameId).emit('new_log_entry', logEntry);
    await broadcastState(gameId, newState);
});
// ---------------------------------------------------------------------------
// SOCKET HANDLERS
// ---------------------------------------------------------------------------
io.on('connection', (socket) => {
    console.log(`[CONNECT] ${socket.id}`);
    socket.on('join_game', (gameId, playerId) => {
        socket.playerId = playerId;
        socket.currentGameId = gameId;
        socket.join(gameId);
        let state = gameManager.getGameState(gameId);
        if (!state) {
            console.log(`[LOBBY] Creating game ${gameId} for ${playerId}`);
            gameManager.createGame(playerId, {});
            state = gameManager.getGameState(gameId);
        }
        else {
            console.log(`[LOBBY] ${playerId} joining game ${gameId}`);
            gameManager.joinGame(gameId, playerId);
            state = gameManager.getGameState(gameId);
        }
        const ts = new Date().toTimeString().slice(0, 8);
        console.log(`[${ts}] ⚪ ${playerId} entered the room.`);
        io.to(gameId).emit('new_log_entry', {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            type: 'SYSTEM',
            timeStr: ts,
            message: `${playerId} entered the room.`,
        });
        broadcastState(gameId, state);
    });
    socket.on('perform_action', (gameId, playerId, action) => {
        try {
            const result = gameManager.handleAction(gameId, playerId, action);
            if (!result.success) {
                // Log rejections to terminal too so they're traceable
                const ts = new Date().toTimeString().slice(0, 8);
                console.log(`[${ts}] ❌ ${playerId} → ${action.type} REJECTED: ${result.message}`);
                socket.emit('action_error', { message: result.message });
            }
        }
        catch (err) {
            console.error('[ERROR] Action processing:', err);
        }
    });
    socket.on('disconnecting', () => {
        const pId = socket.playerId;
        const gId = socket.currentGameId;
        if (pId && gId) {
            console.log(`[${new Date().toTimeString().slice(0, 8)}] ⚪ ${pId} went offline.`);
            const updatedState = gameManager.setPlayerOffline(gId, pId);
            if (updatedState) {
                io.to(gId).emit('new_log_entry', {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'SYSTEM',
                    timeStr: new Date().toTimeString().slice(0, 8),
                    message: `${pId} went offline.`,
                });
                broadcastState(gId, updatedState);
            }
        }
    });
    socket.on('disconnect', () => console.log(`[DISCONNECT] ${socket.id}`));
});
// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
async function broadcastState(gameId, state) {
    const sockets = await io.in(gameId).fetchSockets();
    sockets.forEach(s => {
        const sPlayerId = s.playerId;
        s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
    });
}
function maskStateForPlayer(state, playerId) {
    const serializedBoard = state.board.serialize();
    return {
        ...state,
        board: serializedBoard,
        players: state.players.map((p) => ({
            ...p,
            resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
            devCards: p.id === playerId ? p.devCards : { count: p.devCards?.length || 0 },
        })),
    };
}
function getTotal(res) {
    if (!res)
        return 0;
    //return Object.values(res).reduce((a: any, b: any) => a + b, 0);
    return Object.values(res).reduce((a, b) => a + b, 0);
}
// ---------------------------------------------------------------------------
// STATIC + START
// ---------------------------------------------------------------------------
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));
app.get('*', (_req, res) => res.sendFile(path.join(clientDistPath, 'index.html')));
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`[SERVER] Catan running on http://localhost:${PORT}`);
});
