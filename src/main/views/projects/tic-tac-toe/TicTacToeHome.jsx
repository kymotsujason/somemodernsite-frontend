import React, { Component } from 'react';
import Card from '../../../../generic_components//components/Card';
import {Button} from 'primereact/button';
import Singleplayer from './Singleplayer';
import VsAI from './VsAI';
import Typist from 'react-typist';
import Multiplayer from './Multiplayer';
import {Growl} from 'primereact/growl';

class TicTacToeHome extends Component {
	constructor(props) {
		super(props);
		
		this.state={
			single: false,
			vsAI: false,
			multi: false,
			multimenu: false,
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
			//return <Multiplayer />
			this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Multiplayer is not yet implemented!'})
			this.setState({ multi: false })
		}
		else if (this.state.multimenu) {
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
								label="Host game"
								onClick={() => this.setState({multi:true})}
							/>
							<Button 
								label="Join game"
								onClick={() => this.setState({multi:true})}
							/>
							<Button 
								label="Back"
								onClick={() => this.setState({multimenu:false})}
							/>
						</div>
					</Card>
				</div>
			);
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
								onClick={() => this.setState({single:true})}
							/>
							<Button 
								label="vs AI"
								onClick={() => this.setState({vsAI:true})}
							/>
							<Button 
								label="Multiplayer"
								onClick={() => this.setState({multimenu:true})}
							/>
						</div>
					</Card>
				</div>
			)
		}
	}

	render() { 
		return (
			<div>
				<Growl ref={(el) => this.growl = el}></Growl>
				{this.renderMenu()}
			</div>
		);
	}
}
 
export default TicTacToeHome;