import React, { Component } from "react";
import WebSocketInstance from "./../../../components/Websocket";
import Card from "../../../../generic_components//components/Card";
import Board from "./Board";
import "./css/game.css";
import { withRouter } from "react-router-dom";
import randomstring from "randomstring";
import Typist from "react-typist";
import { Button } from "primereact/button";
import { socket_url } from "../../../components/static_socket";
import { ClimbingBoxLoader } from "react-spinners";
import { PropTypes } from "prop-types";

class Multiplayer extends Component {
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
            opponentMove: false,
            player: "",
            playerId: randomstring.generate(),
            playerCount: 1
        };
        this.calculateWinner = this.calculateWinner.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.sendMove = this.sendMove.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

        WebSocketInstance.connect(
            socket_url + "tictactoe/multi/" + this.props.id
        );
        this.waitForSocketConnection(() => {
            this.setState({ connected: true });
            this.sendMessage("connected", this.state.playerId);
            WebSocketInstance.addCallbacksMulti(
                this.receiveMove.bind(this),
                this.receiveMessage.bind(this)
            );
        });
    }

    componentDidMount() {
        window.addEventListener("beforeunload", ev => {
            ev.preventDefault();
            return this.sendMessage("disconnected", this.state.playerId);
        });
    }

    componentWillUnmount() {
        this.setState({
            playerCount: this.state.playerCount - 1
        });
        this.sendMessage("disconnected", this.state.playerId);
        window.removeEventListener("beforeunload", ev => {
            ev.preventDefault();
            return this.sendMessage("disconnected", this.state.playerId);
        });
        WebSocketInstance.disconnect();
    }

    waitForSocketConnection(callback) {
        const component = this;
        setTimeout(function() {
            // Check if websocket state is OPEN
            if (WebSocketInstance.state() === 1) {
                callback();
                return;
            } else {
                component.waitForSocketConnection(callback);
            }
        }, 100); // wait 100 milisecond for the connection...
    }

    receiveMove(board, player) {
        if (this.state.player !== player) {
            const history = this.state.history.slice(
                0,
                this.state.stepNumber + 1
            );
            let newHistory = history.concat([
                {
                    squares: board
                }
            ]);
            this.setState({
                history: newHistory,
                xIsNext: !this.state.xIsNext,
                stepNumber: history.length,
                opponentMove: false
            });
        }
    }

    sendMove(board, player) {
        this.setState({ opponentMove: true });
        WebSocketInstance.newTicTacToeMulti(board.squares, player);
    }

    receiveMessage(message, playerId) {
        if (message === "reset") {
            this.setState({
                history: [
                    {
                        squares: Array(9).fill(null)
                    }
                ],
                xIsNext: true,
                stepNumber: 0,
                reset: false,
                opponentMove: false,
                player: ""
            });
        } else if (message === "X" && this.state.player !== "X") {
            if (this.state.xIsNext) {
                this.setState({
                    player: "O",
                    opponentMove: true
                });
            } else {
                this.setState({
                    player: "O",
                    opponentMove: false
                });
            }
        } else if (message === "O" && this.state.player !== "O") {
            if (this.state.xIsNext) {
                this.setState({
                    player: "X",
                    opponentMove: false
                });
            } else {
                this.setState({
                    player: "X",
                    opponentMove: true
                });
            }
        } else if (
            message === "connected" &&
            playerId !== this.state.playerId
        ) {
            this.setState({
                playerCount: this.state.playerCount + 1
            });
            this.sendMessage("awk", this.state.playerId);
            this.sendMove(
                this.state.history[this.state.history.length - 1],
                this.state.player
            );
            if (this.state.player === "X") {
                this.sendMessage("X", this.state.playerId);
            } else if (this.state.player === "O") {
                this.sendMessage("O", this.state.playerId);
            }
        } else if (message === "disconnected") {
            this.setState({
                playerCount: this.state.playerCount - 1
            });
        } else if (message === "awk" && playerId !== this.state.playerId) {
            this.setState({
                playerCount: this.state.playerCount + 1
            });
        }
    }

    sendMessage(message, playerId) {
        WebSocketInstance.newTicTacToeMultiMessage(message, playerId);
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
        if (!this.state.opponentMove && this.state.player !== "") {
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
            this.sendMove(newHistory[history.length], this.state.player);
        }
    }

    render() {
        if (this.state.connected) {
            if (this.state.playerCount >= 2) {
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
                        <br />
                        <Card className="g-col-6 center_text">
                            <div className="game p-grid">
                                <div className="game-board">
                                    <Board
                                        squares={current.squares}
                                        onClick={i => this.handleClick(i)}
                                    />
                                </div>
                                <div className="game-info">
                                    <div>{status}</div>
                                    <div>
                                        {this.state.player === "" ? (
                                            <div>
                                                Please choose your character
                                            </div>
                                        ) : (
                                            <div>
                                                You are playing as:{" "}
                                                {this.state.player}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {this.state.reset ? (
                                            <Button
                                                label="Reset"
                                                onClick={() =>
                                                    this.sendMessage(
                                                        "reset",
                                                        this.state.playerId
                                                    )
                                                }
                                            />
                                        ) : this.state.player === "" ? (
                                            <div>
                                                <Button
                                                    label="X"
                                                    onClick={() => {
                                                        this.setState({
                                                            player: "X",
                                                            opponentMove: false
                                                        });
                                                        this.sendMessage(
                                                            "X",
                                                            this.state.playerId
                                                        );
                                                    }}
                                                />
                                                <Button
                                                    label="O"
                                                    onClick={() => {
                                                        this.setState({
                                                            player: "O",
                                                            opponentMove: true
                                                        });
                                                        this.sendMessage(
                                                            "O",
                                                            this.state.playerId
                                                        );
                                                    }}
                                                />
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            } else if (this.state.playerCount < 2) {
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
                        <br />
                        <Card className="g-col-6 center_text">
                            <ClimbingBoxLoader
                                css={{ margin: "0 auto" }}
                                color={"#ffffff"}
                            />
                            <br />
                            Waiting for an opponent...
                        </Card>
                        <br />
                        <Card className="g-col-6 center_text">
                            <p>
                                Have your opponent join using this id:{" "}
                                <a href="true" style={{ color: "#bfc9ff" }}>
                                    {this.props.id}
                                </a>
                            </p>
                            <p>or</p>
                            <p>
                                Give them this link:{" "}
                                <a href="true" style={{ color: "#bfc9ff" }}>
                                    https://jasonyue.ca
                                    {this.props.location.pathname}
                                </a>
                            </p>
                        </Card>
                    </div>
                );
            }
        } else {
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
                    <br />
                    <Card className="g-col-6 center_text">
                        <ClimbingBoxLoader
                            css={{ margin: "0 auto" }}
                            color={"#ffffff"}
                        />
                        <br />
                        Connecting...
                    </Card>
                </div>
            );
        }
    }
}

Multiplayer.propTypes = {
    id: PropTypes.string,
    location: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default withRouter(Multiplayer);
