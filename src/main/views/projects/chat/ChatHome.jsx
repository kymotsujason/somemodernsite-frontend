import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import Login from './Login';
import Chat from './Chat';

class ChatHome extends Component {
	state = {  }

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
				</Card>
			</div>
		);
	}
}
export default ChatHome;