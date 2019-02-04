import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import Login from './Login';
import Chat from './Chat';
import Typist from 'react-typist';

class ChatHome extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			currentUser: '',
			loggedIn: false
		};

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(currentUser) {
		this.setState({
			currentUser: currentUser,
			loggedIn: true,
		})
	}

	render() { 
		return (  
			<div className="spacing main_container">
				<Card className="g-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>Chat</span>
					</Typist>
				</Card>
				<br/>
				{
					this.state.loggedIn ?
					<Chat 
						currentUser={this.state.currentUser}
					/>
					:
					<Login 
						onLogin={this.handleLogin}
					/>
				}
			</div>
		);
	}
}
export default ChatHome;