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
/** Maps hex color to a Unicode emoji block for the terminal */
const COLOR_ICONS = {
    '#e74c3c': '🔴',
    '#e67e22': '🟠',
    '#f1c40f': '🟡',
    '#27ae60': '🟢',
    '#3498db': '🔵',
    '#9b59b6': '🟣',
    '#8b4513': '🟤',
    '#ffffff': '⬜',
    '#333333': '⬛',
};
// ---------------------------------------------------------------------------
// HELPERS (must be defined before they are used)
// ---------------------------------------------------------------------------
/** Extract the current player ID from a game state object */
function getCurrentPlayerIdFromState(state) {
    // Adjust this to match your actual state structure:
    return state.currentPlayerId; // if stored directly
    // or
    // return state.players[state.turnIndex]?.id;      // if using a turn index
}
/** Get the current player ID for a given game (by gameId) */
function getCurrentPlayerId(gameId) {
    const state = gameManager.getGameState(gameId);
    if (!state)
        return '';
    return getCurrentPlayerIdFromState(state);
}
/** Get a player’s display name */
function getPlayerName(gameId, playerId) {
    const state = gameManager.getGameState(gameId);
    const player = state?.players.find((p) => p.id === playerId);
    return player?.name || playerId;
}
/** Get a player’s color */
function getPlayerColor(gameId, playerId) {
    const state = gameManager.getGameState(gameId);
    const player = state?.players.find((p) => p.id === playerId);
    return player?.color || '#bdc3c7';
}
// ---------------------------------------------------------------------------
// LOG ENTRY BUILDER (for successful actions)
// ---------------------------------------------------------------------------
/**
 * Build a log entry that matches the structure expected by the Vue console.
 * Adds `currentPlayerId` to the response object.
 */
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
    const colorIcon = COLOR_ICONS[playerColor] ?? '⬜';
    console.log(`[${timeStr}] ${colorIcon} ${playerName}`);
    console.log(`  REQ ${JSON.stringify(request)}`);
    console.log(`  RES ${JSON.stringify(response)}`);
    // ── Add the current player ID (from the updated state) ──────────────
    const currentPlayerId = getCurrentPlayerIdFromState(state);
    // ── Socket payload (consumed by CommandConsole.vue) ─────────────────
    return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        type: 'ACTION',
        playerId: playerId,
        playerName: playerName,
        playerColor: playerColor,
        request: request,
        response: {
            ...response,
            currentPlayerId, // ← now included in every action log
        },
    };
}
// ---------------------------------------------------------------------------
// CENTRAL BROADCAST — fires for EVERY successful action
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
        console.log(`[${ts}] ⬜ ${playerId} entered the room.`);
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
                // --- REJECTED ACTION: emit a rich log entry ---
                const ts = new Date().toTimeString().slice(0, 8);
                console.log(`[${ts}] ❌ ${playerId} → ${action.type} REJECTED: ${result.message}`);
                const currentPlayerId = getCurrentPlayerId(gameId); // who should play
                const logEntry = {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'ACTION', // Keep as ACTION so it appears in the ACTION filter
                    playerId,
                    playerName: getPlayerName(gameId, playerId),
                    playerColor: getPlayerColor(gameId, playerId),
                    request: { type: action.type, payload: action.payload },
                    response: {
                        success: false,
                        message: result.message, // e.g., "REJECTED: It is seat_xxx's turn"
                        currentPlayerId, // who should play
                    },
                };
                io.to(gameId).emit('new_log_entry', logEntry);
                // (Optional) Remove the old action_error emit to avoid duplicate logs.
                // socket.emit('action_error', { message: result.message });
            }
            // If result.success is true, the 'action_success' event (above) handles logging.
        }
        catch (err) {
            console.error('[ERROR] Action processing:', err);
        }
    });
    socket.on('disconnecting', () => {
        const pId = socket.playerId;
        const gId = socket.currentGameId;
        if (pId && gId) {
            console.log(`[${new Date().toTimeString().slice(0, 8)}] ⬜ ${pId} went offline.`);
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
// STATE BROADCAST HELPERS
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
