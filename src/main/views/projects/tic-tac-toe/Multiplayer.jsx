import React, { Component } from 'react';
import WebSocketInstance from './../../../components/WithWebsocket';
import Card from '../../../../generic_components//components/Card';
import Board from './Board';
import './css/game.css'
import Typist from 'react-typist';
import {socket_url} from '../../../components/static_socket';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';

const override = css`
    margin: 0 auto;
`;

class Multiplayer extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			message: '',
			messages: '',
			history: [{
				squares: Array(9).fill(null),
			}],
			xIsNext: true,
			stepNumber: 0,
			connected: false,
		}
		this.calculateWinner = this.calculateWinner.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.jumpTo = this.jumpTo.bind(this);

		WebSocketInstance.connect(socket_url + "tictactoe/multi");
		this.waitForSocketConnection(() => {
			WebSocketInstance.addCallbacks(this.setState({connected: true}))
			//WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this))
		});
	}

	componentWillUnmount() {
		WebSocketInstance.disconnect();
		console.log("Disconnected");
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

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (var i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
	}

	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		})
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (this.calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares: squares,
			}]),
			xIsNext: !this.state.xIsNext,
			stepNumber: history.length,
		});
	}

	render() { 
		if(this.state.connected) {
			const history = this.state.history;
			const current = history[this.state.stepNumber];
			var status;
			const winner = this.calculateWinner(current.squares);

			if (winner) {
				status = 'Winner: ' + winner;
			}
			else if (this.state.stepNumber === 9) {
				status = 'Draw';
			}
			else {
				status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
			}
			return (  
				<div className="spacing main_container">
					<Card className="g-col-6 center_text">
						<Typist
							className="typist"
							avgTypingSpeed={50}
							startDelay={300}
						>
							<span>Tic Tac Toe Multiplayer</span>
						</Typist>
					</Card>
					<br></br>
					<Card className="g-col-6 center_text">
						<div className="game p-grid">
							<div className="game-board">
								<Board 
									squares={current.squares}
									onClick={(i) => this.handleClick(i)}
								/>
							</div>
							<div className="game-info">
								<div>{status}</div>
							</div>
						</div>
					</Card>
				</div>
			);
		}
		else {
			return (
				<div className="spacing main_container">
					<Card className="g-col-6 center_text">
						<Typist
							className="typist"
							avgTypingSpeed={50}
							startDelay={300}
						>
							<span>Tic Tac Toe Multiplayer</span>
						</Typist>
					</Card>
					<br></br>
					<Card className="g-col-6 center_text">
						<ClimbingBoxLoader 
							css={override}
							color={'#ffffff'}
						/>
					</Card>
				</div>
			)
		}
	}
}
 
export default Multiplayer;