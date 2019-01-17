import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

class Login extends Component {
	state = {  }

	constructor() {
        super();
        this.state = {
            value: ''
		};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(currentUser) {
		if (currentUser !== '') {
			this.props.onLogin(currentUser);
		}
	}

	render() { 
		return (  
			<div>
				<h3>Enter your username</h3>
				<span>
					<InputText 
						value={this.state.value}
						onChange={(e) => this.setState({value: e.target.value})} 
					/>
					<Button label="Submit" onClick={() => this.handleClick(this.state.value)}/>
				</span>
			</div>
		);
	}
}
 
export default Login;