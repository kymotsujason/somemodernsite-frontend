import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import {Button} from 'primereact/button';
import Singleplayer from './Singleplayer';
import VsAI from './VsAI';
import Typist from 'react-typist';
import Multiplayer from './Multiplayer';

class TicTacToeHome extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			single: false,
			vsAI: false,
			multi: false,
		}

		this.renderMenu = this.renderMenu.bind(this);
	}

	renderMenu() {
		if(this.state.single){
			return <Singleplayer />
		}
		else if (this.state.vsAI) {
			return <VsAI />
		}
		else if (this.state.multi) {
			return <Multiplayer />;
		}
		else{
			return (
				<div className="spacing main_container">
					<Card className="g-col-6 center_text">
							<Typist
								className="typist"
								avgTypingSpeed={50}
								startDelay={300}
							>
								<span>Tic Tac Toe</span>
							</Typist>
					</Card>
					<br></br>
					<Card className="g-col-6 center_text">
						<div className="p-grid p-justify-center">
							<Button 
								label="Singleplayer"
								className="p-button-raised p-button-rounded"
								onClick={() => this.setState({single:true})}
							/>
							<Button 
								label="vs AI"
								className="p-button-raised p-button-rounded"
								onClick={() => this.setState({vsAI:true})}
							/>
							<Button 
								label="Multiplayer"
								className="p-button-raised p-button-rounded"
								onClick={() => this.setState({multi:true})}
							/>
						</div>
					</Card>
				</div>
			)
		}
	}

	render() { 
		return (
			this.renderMenu()
		);
	}
}
 
export default TicTacToeHome;