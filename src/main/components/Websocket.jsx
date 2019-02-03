class WebSocketService {
	static instance = null;
	callbacks = {};
  
	static getInstance() {
	  	if (!WebSocketService.instance) {
			WebSocketService.instance = new WebSocketService();
	  	}
	  	return WebSocketService.instance;
	}
  
	constructor() {
	  	this.socketRef = null;
	}
  
	connect(url) {
	  	const path = url;
	  	this.socketRef = new WebSocket(path);
	  	this.socketRef.onopen = () => {
	  	};
	  	this.socketRef.onmessage = e => {
			this.socketResponse(e.data);
	  	};
  
	  	this.socketRef.onerror = e => {
			console.log(e.message);
	  	};
	  	this.socketRef.onclose = () => {
			this.connect();
	  	};
	}

	disconnect() {
		this.socketRef.onclose = null;
		this.socketRef.close();
	}
  
	socketResponse(data) {
		const parsedData = JSON.parse(data);
		const command = parsedData.command;
	  	if (Object.keys(this.callbacks).length === 0) {
			return;
	  	}
	  	if (command === 'chat-new_message') {
			this.callbacks[command](parsedData.message);
		}
		if (command === 'tictactoe-AI') {
			this.callbacks[command](parsedData.board);
		}
		if (command === 'tictactoe-multi') {
			this.callbacks[command](parsedData.board, parsedData.player);
		}
		if (command === 'tictactoe-multimessage') {
			this.callbacks[command](parsedData.message, parsedData.playerId);
		}
	}
  
	newChatMessage(message) {
	  	this.sendMessage({ command: 'chat-new_message', from: message.from, text: message.text }); 
	}

	newTicTacToeAI(board, player) {
		this.sendMessage({ command: 'tictactoe-AI', board: board, player: player });
	}

	newTicTacToeMulti(board, player) {
		this.sendMessage({ command: 'tictactoe-multi', board: board, player: player });
	}

	newTicTacToeMultiMessage(message, playerId) {
		this.sendMessage({ command: 'tictactoe-multimessage', message: message, playerId: playerId });
	}
  
	addCallbacks(newMessageCallback) {
		this.callbacks['chat-new_message'] = newMessageCallback;
		this.callbacks['tictactoe-AI'] = newMessageCallback;
	}

	addCallbacksMulti(sendMove, sendMessage) {
		this.callbacks['tictactoe-multi'] = sendMove;
		this.callbacks['tictactoe-multimessage'] = sendMessage;
	}
	
	sendMessage(data) {
	  	try {
			this.socketRef.send(JSON.stringify({ ...data }));
	  	}
	  	catch(err) {
			console.log(err.message);
	 	}  
	}
  
	state() {
	  	return this.socketRef.readyState;
	}
  
	waitForSocketConnection(callback) {
	  	const socket = this.socketRef;
	  	const recursion = this.waitForSocketConnection;
	  	setTimeout(
			function () {
		  		if (socket.readyState === 1) {
					console.log("Connection is made")
					if(callback != null){
						callback();
					}
					return;
	
				} else {
					console.log("connecting...")
					recursion(callback);
				}
		}, 100); // wait 100 milisecond for the connection...
	}
  }
  
  const WebSocketInstance = WebSocketService.getInstance();
  
  export default WebSocketInstance;
  