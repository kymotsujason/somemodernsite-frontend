import React, { Component } from "react";
import Board from "./Board";
import "./css/game.css";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import VsAI from "./VsAI";

/*	TO IMPLEMENT
	2. Bold the currently selected item in the move list.
	3. Add a toggle button that lets you sort the moves in either ascending or descending order.
	4. When someone wins, highlight the three squares that caused the win.
*/
class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            value: false,
            stepNumber: 0
        };

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
            [2, 4, 6]
        ];
        for (var i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        var status;
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            let pos = 0,
                col = 1,
                row = 0;
            if (move > 0) {
                for (let i = 0; i < step.squares.length; i++) {
                    if (history[move - 1].squares[i] !== step.squares[i]) {
                        pos = i;
                        break;
                    }
                }
            }
            if (pos % 3 === 0) {
                col = 1;
                if (pos === 0) {
                    row = 1;
                } else if (pos === 3) {
                    row = 2;
                } else if (pos === 6) {
                    row = 3;
                }
            } else if (pos % 3 === 1) {
                col = 2;
                if (pos === 1) {
                    row = 1;
                } else if (pos === 4) {
                    row = 2;
                } else if (pos === 7) {
                    row = 3;
                }
            } else if (pos % 3 === 2) {
                col = 3;
                if (pos === 2) {
                    row = 1;
                } else if (pos === 5) {
                    row = 2;
                } else if (pos === 8) {
                    row = 3;
                }
            }
            const desc = move
                ? "Go to move #" +
                  move +
                  " (" +
                  col.toString() +
                  ", " +
                  row.toString() +
                  ")"
                : "Go to game start";
            return (
                <li
                    key={move}
                    className="remove_numbers2"
                    style={{ paddingBottom: "1em" }}
                >
                    <Button
                        label={desc}
                        className="p-button-raised"
                        onClick={() => this.jumpTo(move)}
                    />
                </li>
            );
        });

        if (winner) {
            status = "Winner: " + winner;
        } else if (this.state.stepNumber === 9) {
            status = "Draw";
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <div>
                <div className="center_text" style={{ paddingBottom: "2em" }}>
                    <span>Singleplayer </span>
                    <InputSwitch
                        checked={this.state.value}
                        onChange={e => this.setState({ value: e.value })}
                    />
                    <span> AI</span>
                </div>
                {!this.state.value ? (
                    <div className="game2 p-grid">
                        <div>
                            <Board
                                squares={current.squares}
                                onClick={i => this.handleClick(i)}
                            />
                        </div>
                        <div>
                            <div
                                className="center_text"
                                style={{ paddingTop: "1em" }}
                            >
                                {status}
                            </div>
                            <ol>{moves}</ol>
                        </div>
                    </div>
                ) : (
                    <VsAI />
                )}
            </div>
        );
    }
}

export default Game;
