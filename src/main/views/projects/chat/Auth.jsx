import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import WebSocketInstance from './services/WebSocket';
import Chat from './components/Chat';
import InitChat from './components/InitChat';

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '',
			loggedIn: false
		};

		this.handleLoginSubmit = this.handleLoginSubmit(this);
	}

	handleLoginSubmit = (username) => {
		this.setState({ loggedIn: true, username: username });
		WebSocketInstance.connect();
	}
	
	render() { 
		const { 
			loggedIn,
			username
		} = this.state;
		
		return (
			<div className="spacing main_container">
				<Card className="g-col-6 center_text">
					{ 
					loggedIn ?
					<Chat
						currentUser={username}
					/>
					:
					<InitChat
						onSubmit={this.handleLoginSubmit}
						usernameChangeHandler={this.usernameChangeHandler}
					/>
					}
				</Card>
			</div>
		);
	}
}
 
export default Auth;