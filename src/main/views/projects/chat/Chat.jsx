import React, { Component } from 'react';
import WebSocketInstance from './../../../components/Websocket';
import {InputText} from 'primereact/inputtext';
import CustomButton from '../../../../generic_components/components/CustomButton';
import {socket_url} from '../../../components/static_socket';
import Card from '../../../../generic_components/components/Card';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';
import './css/chat.css';

const override = css`
    margin: 0 auto;
`;

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
			messages: '',
			users: [],
			connected: false,
		}

		WebSocketInstance.connect(socket_url + "chat");
		this.waitForSocketConnection(() => {
			this.setState({connected: true});
			this.sendEvent("connected")
			WebSocketInstance.addCallbacksMulti(this.addMessage.bind(this), this.receiveEvent.bind(this))
		});
	}

	componentDidMount() {
		window.addEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return this.sendEvent("disconnected");
        });
		
	}
	
	componentDidUpdate() {
		if(this.state.connected) {
			this.scrollToBottom();
		}
	}

	componentWillUnmount() {
		this.sendEvent("disconnected");
		window.removeEventListener("beforeunload", (ev) => {
            ev.preventDefault();
            return this.sendEvent("disconnected");
        });
		WebSocketInstance.disconnect();
		console.log("Disconnected");
	}
	
	scrollToBottom() {
		const chat = this.messagesEnd;
		const scrollHeight = chat.scrollHeight;
		const height = chat.clientHeight;
		const maxScrollTop = scrollHeight - height;
		chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
	}
	
	addMessage(message) {
		this.setState({ messages: [...this.state.messages, message]});
	}
	
	sendMessageHandler(e, message) {
		const messageObject = {
		  	from: this.props.currentUser,
		  	text: message
		};
		WebSocketInstance.newChatMessage(messageObject);
		this.setState({
		  	message: ''
		})
		e.preventDefault();
	}

	receiveEvent(message) {
		if (message.content === "connected") {
			if (message.author !== this.props.currentUser && !this.state.users.includes(message.author)) {
				this.sendEvent("ack")
			}
			const userList = [...this.state.users];
			userList.push(message.author)
			this.setState({
				users: userList
			})
		}
		else if (message.content === "disconnected") {
			const userList = [...this.state.users];
			var index = userList.indexOf(message.author)
			userList.splice(index, 1);
			this.setState({
				users: userList
			})
		}
		else if (message.content === "ack" && message.author !== this.props.currentUser) {
			const userList = [...this.state.users];
			userList.push(message.author)
			this.setState({
				users: userList
			})
		}
	}

	sendEvent(message) {
		const messageObject = {
			from: this.props.currentUser,
			text: message
	  	};
		WebSocketInstance.newChatEvent(messageObject);
	}
	
	renderMessages(messages) {
		const currentUser = this.props.currentUser;
		return messages.map((message, i) => <li key={message.content} className={message.author === currentUser ? 'me' : 'him'}> <h4 className='author'>{ message.author } </h4><p>{ message.content }</p></li>);
	}

	waitForSocketConnection(callback) {
		const component = this;
		setTimeout(
		  function () {
			// Check if websocket state is OPEN
			if (WebSocketInstance.state() === 1) {
			  	console.log("Connection is made")
			  	callback();
			  	return;
			} else {
			  	console.log("Connecting...")
			  	component.waitForSocketConnection(callback);
			}
		}, 100); // wait 100 milisecond for the connection...
	}

	render() { 
		if(this.state.connected) {
			const messages = this.state.messages;
			const currentUser = this.props.currentUser;
			return (  
				<Card className="g-col-6 center_text">
					<div className="p-grid">
						<div className='chat p-col'>
							<div className='container'>
								<h1>Chatting as {currentUser} </h1>
								<ul ref={(el) => { this.messagesEnd = el; }}>
								{ 
									messages && 
									this.renderMessages(messages) 
								}
								</ul>
							</div>
							<div className='container message-form'>
								<span>
									<InputText
										value={this.state.message}
										onChange={(e) => this.setState({message: e.target.value})} 
									/>
									<CustomButton 
										icon="paper-plane" 
										iconLocation="center" 
										onClick={(e) => this.sendMessageHandler(e, this.state.message)}
									/>
								</span>
							</div>
						</div>
						<div className="g-col-flex">
							<Card className="center_text" style={{background: 'rgba(0, 0, 0, 0.4)'}}>
								<p>Currently connected: </p>
								<ul>
									{this.state.users.map((users) => <p key={users} style={{color: '#a3ff91'}}>{users}</p>)}
								</ul>
							</Card>
						</div>
					</div>
					
				</Card>
			);
		}
		else {
			return (
				<Card className="g-col-6 center_text">
					<div>
						<ClimbingBoxLoader 
							css={override}
							color={'#ffffff'}
						/>
						Connecting...
					</div>
				</Card>
			)
		}
	}
}
 
export default Chat;