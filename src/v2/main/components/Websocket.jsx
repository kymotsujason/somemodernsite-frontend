import randomstring from "randomstring";

class WebSocketService {
    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor() {
        this.socketRef = null;
        this.instance = null;
        this.playerId = randomstring.generate();
        this.status = 0;
        this.callbacks = {};
    }

    connect(url) {
        this.status = 2;
        const path = url;
        this.socketRef = new WebSocket(path);
        this.socketRef.onopen = () => {
            this.status = 1;
        };
        this.socketRef.onmessage = e => {
            this.socketResponse(e.data);
        };
        this.socketRef.onerror = () => {};
        this.socketRef.onclose = () => {
            this.connect();
        };
    }

    disconnect() {
        this.status = 0;
        this.socketRef.onclose = null;
        this.socketRef.close();
    }

    socketResponse(data) {
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        if (Object.keys(this.callbacks).length === 0) {
            return;
        }
        if (command === "chat-new_message") {
            this.callbacks[command](parsedData.message);
        }
        if (command === "chat-event") {
            this.callbacks[command](parsedData.message);
        }
        if (command === "tictactoe-AI") {
            this.callbacks[command](parsedData.board);
        }
        if (command === "tictactoe-multi") {
            this.callbacks[command](parsedData.board, parsedData.player);
        }
        if (command === "tictactoe-multimessage") {
            this.callbacks[command](parsedData.message, parsedData.playerId);
        }
    }

    newChatMessage(message) {
        this.sendMessage({
            command: "chat-new_message",
            from: message.from,
            text: message.text
        });
    }

    newChatEvent(message) {
        this.sendMessage({
            command: "chat-event",
            from: message.from,
            text: message.text
        });
    }

    newTicTacToeAI(board, player) {
        this.sendMessage({
            command: "tictactoe-AI",
            board: board,
            player: player
        });
    }

    newTicTacToeMulti(board, player) {
        this.sendMessage({
            command: "tictactoe-multi",
            board: board,
            player: player
        });
    }

    newTicTacToeMultiMessage(message, playerId) {
        this.sendMessage({
            command: "tictactoe-multimessage",
            message: message,
            playerId: playerId
        });
    }

    addCallbacks(newMessageCallback) {
        this.callbacks["tictactoe-AI"] = newMessageCallback;
    }

    addCallbacksMulti(callback1, callback2) {
        this.callbacks["chat-new_message"] = callback1;
        this.callbacks["chat-event"] = callback2;
        this.callbacks["tictactoe-multi"] = callback1;
        this.callbacks["tictactoe-multimessage"] = callback2;
    }

    sendMessage(data) {
        try {
            this.socketRef.send(JSON.stringify({ ...data }));
        } catch (err) {
            throw new Error(err);
        }
    }

    getPlayerId() {
        return this.playerId;
    }

    connectionStatus() {
        return this.status;
    }

    state() {
        return this.socketRef.readyState;
    }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
