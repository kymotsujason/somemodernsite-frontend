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
			console.log('WebSocket open');
	  	};
	  	this.socketRef.onmessage = e => {
			this.socketNewMessage(e.data);
	  	};
  
	  	this.socketRef.onerror = e => {
			console.log(e.message);
	  	};
	  	this.socketRef.onclose = () => {
			console.log("WebSocket closed let's reopen");
			this.connect();
	  	};
	}

	disconnect() {
		this.socketRef.onclose = null;
		this.socketRef.close();
	}
  
	socketNewMessage(data) {
	  	const parsedData = JSON.parse(data);
		const command = parsedData.command;
	  	if (Object.keys(this.callbacks).length === 0) {
			return;
	  	}
	  	if (command === 'chat-new_message') {
			this.callbacks[command](parsedData.message);
		}
		if (command === 'tictactoe-AI') {
			this.callbacks[command](parsedData.message);
		}
	}
  
	newChatMessage(message) {
	  	this.sendMessage({ command: 'chat-new_message', from: message.from, text: message.text }); 
	}
  
	addCallbacks(newMessageCallback) {
	  	this.callbacks['chat-new_message'] = newMessageCallback;
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
  