import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Board from './Board';
import './css/game.css'

/*	TO IMPLEMENT
	1. Display the location for each move in the format (col, row) in the move history list.
	2. Bold the currently selected item in the move list.
	3. Rewrite Board to use two loops to make the squares instead of hardcoding them.
	4. Add a toggle button that lets you sort the moves in either ascending or descending order.
	5. When someone wins, highlight the three squares that caused the win.
	6. When no one wins, display a message about the result being a draw.
*/
class Game extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.state = {
			history: [{
				squares: Array(9).fill(null),
			}],
			xIsNext: true,
			stepNumber: 0,
		}

		this.calculateWinner = this.calculateWinner.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.jumpTo = this.jumpTo.bind(this);
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
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		var status;
		const winner = this.calculateWinner(current.squares);

		const moves = history.map((step, move) => {
			const desc = move ?
				'Go to move #' + move :
				'Go to game start';
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			)
		})

		if (winner) {
			status = 'Winner: ' + winner;
		}
		else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}
		return (  
			<div className="spacing main_container">
				<Card style={{background: '#111', color: 'white'}}  className="p-col-6 center_text">
					<div className="game">
						<div className="game-board">
							<Board 
								squares={current.squares}
								onClick={(i) => this.handleClick(i)}
							/>
						</div>
						<div className="game-info">
							<div>{status}</div>
							<ol>{moves}</ol>
						</div>
					</div>
				</Card>
			</div>
		);
	}
}
 
export default Game;