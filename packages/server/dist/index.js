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
const io = new Server(httpServer, {
    cors: { origin: "*" }
});
const gameManager = new GameManager();
/**
 * SOCKET.IO LOGIC
 */
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('join_game', (gameId, playerId) => {
        //  Save the playerId to the socket instance for masking
        socket.playerId = playerId;
        // Store gameId on socket for disconnect logic
        socket.currentGameId = gameId;
        socket.join(gameId);
        let state = gameManager.getGameState(gameId);
        if (!state) {
            console.log(`Game ${gameId} not found. Creating new instance...`);
            gameManager.createGame(playerId, {}); // Use your GameManager's create method
            state = gameManager.getGameState(gameId);
        }
        else {
            console.log(`Guest ${playerId} is joining existing game.`);
            gameManager.joinGame(gameId, playerId);
            state;
        }
        console.log(`Guest ${playerId} is joining existing game.`);
        const updatedState = gameManager.joinGame(gameId, playerId);
        // Notify room of join via log
        io.to(gameId).emit('new_log_entry', {
            id: Math.random().toString(36).substr(2, 9),
            timestamp: Date.now(),
            type: 'SYSTEM',
            message: `Player ${playerId} has entered the room.`
        });
        // io.to(gameId).fetchSockets().then(sockets => {
        //   sockets.forEach(s => {
        //     const sPlayerId = (s as any).playerId; 
        //     s.emit('game_state_update', maskStateForPlayer(updatedState, sPlayerId));
        //   });
        // });
        broadcastState(gameId, updatedState);
    });
    socket.on('perform_action', (gameId, playerId, action) => {
        try {
            const result = gameManager.handleAction(gameId, playerId, action);
            if (result.success) {
                const gameState = result.newState;
                // FIX 2: Generate the log entry
                const logEntry = generateLogEntry(playerId, action);
                // FIX 3: Broadcast the log entry to everyone in the room
                io.to(gameId).emit('new_log_entry', logEntry);
                // Send personalized (masked) states to each player
                io.to(gameId).fetchSockets().then(sockets => {
                    sockets.forEach(s => {
                        const sPlayerId = s.playerId;
                        s.emit('game_state_update', maskStateForPlayer(gameState, sPlayerId));
                    });
                });
            }
            else {
                socket.emit('action_error', { message: result.message });
            }
        }
        catch (err) {
            console.error("Action processing error:", err);
        }
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    socket.on('disconnecting', () => {
        const pId = socket.playerId;
        const gId = socket.currentGameId;
        if (pId && gId) {
            console.log(`User: ${pId} disconnecting ...`);
            const updatedState = gameManager.setPlayerOffline(gId, pId);
            if (updatedState) {
                // 1. Log the disconnect in the chat for others
                io.to(gId).emit('new_log_entry', {
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now(),
                    type: 'SYSTEM',
                    message: `Player ${pId} has gone offline.`
                });
                // 2. Broadcast updated state (showing isOnline: false)
                broadcastState(gId, updatedState);
            }
        }
    });
});
/**
 * NEW HELPER FUNCTION: broadcastState
 * This ensures every single player gets a "Refresh" signal that is
 * personalized for them (masking other people's cards).
 */
async function broadcastState(gameId, state) {
    const sockets = await io.in(gameId).fetchSockets();
    sockets.forEach(s => {
        const sPlayerId = s.playerId;
        // We call the masking function specifically for THIS person's ID
        s.emit('game_state_update', maskStateForPlayer(state, sPlayerId));
    });
}
/**
 * PRODUCTION DEPLOYMENT LOGIC
 * Serve the static files from the Vue build directory.
 * In the Docker/Monorepo structure, client dist is 2 levels up from server dist.
 */
const clientDistPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientDistPath));
// Fallback for Single Page Application (Vue Router)
app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});
/**
 * HELPER FUNCTIONS
 */
function generateLogEntry(playerId, action) {
    let message = '';
    switch (action.type) {
        case 'ROLL_DICE':
            message = `rolled the dice.`;
            break;
        case 'BUILD_SETTLEMENT':
            message = `built a settlement.`;
            break;
        case 'BUILD_ROAD':
            message = `built a road.`;
            break;
        case 'PLACE_INITIAL_SETTLEMENT':
            message = `placed an initial settlement.`;
            break;
        case 'PLACE_INITIAL_ROAD':
            message = `placed an initial road.`;
            break;
        case 'END_TURN':
            message = `ended their turn.`;
            break;
        case 'PROPOSE_TRADE':
            message = `proposed a trade.`;
            break;
        case 'EXECUTE_TRADE':
            message = `completed a trade.`;
            break;
        default: message = `performed ${action.type}`;
    }
    return {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
        type: 'ACTION',
        playerId: playerId,
        message: message
    };
}
function maskStateForPlayer(state, playerId) {
    // Debug: Log to see if the engine actually has tiles
    console.log(`--- DEBUG MASKING ---`);
    console.log(`Player: ${playerId}`);
    console.log(`Tiles in raw state: ${state.board.tiles.size}`);
    state.players.forEach(p => {
        console.log(`AUDIT: Seat ${p.color} | Type: ${p.controllerType} | ID: ${p.controllerId}`);
    });
    const serializedBoard = state.board.serialize(); // This uses the fix from Step 1
    console.log(`Tiles after serialization: ${serializedBoard.tiles.length}`);
    return {
        ...state,
        board: serializedBoard, // Ensure the GUI gets the CLEAN version
        players: state.players.map((p) => ({
            ...p,
            resources: p.id === playerId ? p.resources : { total: getTotal(p.resources) },
            devCards: p.id === playerId ? p.devCards : { count: p.devCards?.length || 0 }
        }))
    };
}
function getTotal(res) {
    if (!res)
        return 0;
    return Object.values(res).reduce((a, b) => a + b, 0);
}
/**
 * START SERVER
 */
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`Catan Production Server running on http://localhost:${PORT}`);
});
