import React, { Component } from "react";
import WebSocketInstance from "./../../../components/Websocket";
import Board from "./Board";
import "./css/game.css";
import { Button } from "primereact/button";
import { socket_url } from "../../../components/static_socket";
import Loader from "react-loader-spinner";

class VsAI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            stepNumber: 0,
            connected: false,
            reset: false,
            cpuMove: false,
            player: ""
        };
        this.calculateWinner = this.calculateWinner.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendMove = this.sendMove.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

        WebSocketInstance.connect(socket_url + "tictactoe/ai");
        this.waitForSocketConnection(() => {
            this.setState({ connected: true });
            WebSocketInstance.addCallbacks(this.receiveMove.bind(this));
        });
    }

    componentWillUnmount() {
        WebSocketInstance.disconnect();
    }

    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(function() {
            if (WebSocketInstance.state() === 1) {
                callback();
                return;
            } else {
                component.waitForSocketConnection(callback);
            }
        }, 100);
    }

    receiveMove(board) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let newHistory = history.concat([
            {
                squares: board
            }
        ]);
        this.setState({
            history: newHistory,
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            cpuMove: false
        });
    }

    sendMove(board, player) {
        this.setState({ cpuMove: true });
        WebSocketInstance.newTicTacToeAI(board.squares, player);
    }

    resetBoard() {
        this.setState({
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            xIsNext: true,
            stepNumber: 0,
            reset: false,
            cpuMove: false,
            player: ""
        });
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

    handleClick(i) {
        if (!this.state.cpuMove && this.state.player !== "") {
            const history = this.state.history.slice(
                0,
                this.state.stepNumber + 1
            );
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            if (this.calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = this.state.xIsNext ? "X" : "O";
            let newHistory = history.concat([
                {
                    squares: squares
                }
            ]);
            this.setState({
                history: newHistory,
                xIsNext: !this.state.xIsNext,
                stepNumber: history.length
            });
            if (
                this.calculateWinner(newHistory[history.length].squares) ||
                this.state.stepNumber === 8
            ) {
                return;
            }
            this.sendMove(newHistory[history.length], this.state.player);
        }
    }

    render() {
        if (this.state.connected) {
            const history = this.state.history;
            const current = history[this.state.stepNumber];
            var status;
            const winner = this.calculateWinner(current.squares);

            if (winner) {
                status = "Winner: " + winner;
                if (!this.state.reset) {
                    this.setState({
                        reset: true
                    });
                }
            } else if (this.state.stepNumber === 9) {
                status = "Draw";
                if (!this.state.reset) {
                    this.setState({
                        reset: true
                    });
                }
            } else {
                status = "Next player: " + (this.state.xIsNext ? "X" : "O");
            }
            return (
                <div className="game2 p-grid">
                    <div>
                        <Board
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                    <div style={{ paddingLeft: "2em" }}>
                        <div className="center_text">{status}</div>
                        <div>
                            {this.state.player === "" ? (
                                <div>Please choose your character</div>
                            ) : (
                                <div>
                                    You are playing as: {this.state.player}
                                </div>
                            )}
                        </div>
                        <div className="center_text">
                            {this.state.reset ? (
                                <Button
                                    label="Reset"
                                    onClick={() => this.resetBoard()}
                                />
                            ) : this.state.player === "" ? (
                                <div>
                                    <Button
                                        label="X"
                                        onClick={() => {
                                            this.setState({
                                                player: "X",
                                                cpuMove: false
                                            });
                                        }}
                                    />
                                    <Button
                                        label="O"
                                        onClick={() => {
                                            this.setState({
                                                player: "O"
                                            });
                                            this.sendMove(current, "O");
                                        }}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="center_text">
                    <Loader type="Oval" color="#FFFFFF" />
                    Connecting...
                </div>
            );
        }
    }
}

export default VsAI;
