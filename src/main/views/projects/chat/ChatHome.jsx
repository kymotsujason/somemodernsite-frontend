import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import Login from './Login';
import Chat from './Chat';
import {withRouter} from 'react-router-dom';
import Typist from 'react-typist';

class ChatHome extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			currentUser: '',
			loggedIn: false
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.renderMenu = this.renderMenu.bind(this);
	}

	handleLogin(currentUser) {
		this.setState({
			currentUser: currentUser,
			loggedIn: true,
		})
	}

	renderMenu() {
		let path = this.props.location.pathname;
		const splitArr = path.split('/')
		const cleanArr = splitArr.filter((el) => {
			return el !== ""
		});
		if (cleanArr.length === 2) {
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
		else {
			this.props.history.replace("/404")
		}
	}

	render() { 
		return (
			this.renderMenu()
		);
	}
}
export default withRouter(ChatHome);