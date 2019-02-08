import React, { Component } from "react";
import Card from "../../../../generic_components//components/Card";
import { Button } from "primereact/button";
import Singleplayer from "./Singleplayer";
import randomstring from "randomstring";
import VsAI from "./VsAI";
import Typist from "react-typist";
import { InputText } from "primereact/inputtext";
import Multiplayer from "./Multiplayer";
import { withRouter } from "react-router-dom";

class TicTacToeHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            multi: false,
            value: ""
        };

        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu() {
        let path = this.props.location.pathname;
        const splitArr = path.split("/");
        const cleanArr = splitArr.filter(el => {
            return el !== "";
        });
        let id = "";
        if (cleanArr.length >= 3) {
            id = cleanArr[2].toString().toLowerCase();
        }
        if (id === "singleplayer" && cleanArr.length === 3) {
            return <Singleplayer />;
        } else if (id === "ai" && cleanArr.length === 3) {
            return <VsAI />;
        } else if (id === "multiplayer") {
            if (cleanArr.length === 4) {
                return <Multiplayer id={cleanArr[3]} />;
            } else if (cleanArr.length === 3) {
                if (this.state.multi) {
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
                            <br />
                            <Card className="g-col-6 center_text">
                                <div className="p-grid p-justify-center">
                                    <InputText
                                        tooltip="Enter the id of the room (random characters after 'multiplayer')"
                                        tooltipOptions={{ position: "left" }}
                                        keyfilter="alphanum"
                                        value={this.state.value}
                                        onKeyPress={e => {
                                            if (e.key === "Enter") {
                                                if (
                                                    splitArr.length === 4 &&
                                                    this.state.value.trim() !==
                                                        ""
                                                ) {
                                                    this.props.history.push(
                                                        path +
                                                            "/" +
                                                            this.state.value
                                                    );
                                                } else if (
                                                    this.state.value.trim() !==
                                                    ""
                                                ) {
                                                    this.props.history.push(
                                                        path + this.state.value
                                                    );
                                                }
                                            }
                                        }}
                                        onChange={e => {
                                            this.setState({
                                                value: e.target.value
                                            });
                                        }}
                                    />
                                    <Button
                                        label="Join game"
                                        onClick={() => {
                                            if (
                                                splitArr.length === 4 &&
                                                this.state.value !== ""
                                            ) {
                                                this.props.history.push(
                                                    path +
                                                        "/" +
                                                        this.state.value
                                                );
                                            } else if (
                                                this.state.value !== ""
                                            ) {
                                                this.props.history.push(
                                                    path + this.state.value
                                                );
                                            }
                                        }}
                                    />
                                    <Button
                                        label="Back"
                                        onClick={() =>
                                            this.setState({ multi: false })
                                        }
                                    />
                                </div>
                            </Card>
                        </div>
                    );
                } else {
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
                            <br />
                            <Card className="g-col-6 center_text">
                                <div className="p-grid p-justify-center">
                                    <Button
                                        label="Host game"
                                        onClick={() => {
                                            if (splitArr.length === 4) {
                                                this.props.history.push(
                                                    path +
                                                        "/" +
                                                        randomstring.generate(5)
                                                );
                                            } else {
                                                this.props.history.push(
                                                    path +
                                                        +randomstring.generate(
                                                            5
                                                        )
                                                );
                                            }
                                        }}
                                    />
                                    <Button
                                        label="Join game"
                                        onClick={() =>
                                            this.setState({ multi: true })
                                        }
                                    />
                                    <Button
                                        label="Back"
                                        onClick={() =>
                                            this.props.history.push(
                                                "/projects/tic-tac-toe/"
                                            )
                                        }
                                    />
                                </div>
                            </Card>
                        </div>
                    );
                }
            } else {
                this.props.history.replace("/404");
            }
        } else if (cleanArr.length === 2) {
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
                    <br />
                    <Card className="g-col-6 center_text">
                        <div className="p-grid p-justify-center">
                            <Button
                                label="Singleplayer"
                                onClick={() => {
                                    if (splitArr.length === 3) {
                                        this.props.history.push(
                                            path + "/singleplayer"
                                        );
                                    } else {
                                        this.props.history.push(
                                            path + "singleplayer"
                                        );
                                    }
                                }}
                            />
                            <Button
                                label="vs AI"
                                onClick={() => {
                                    if (splitArr.length === 3) {
                                        this.props.history.push(path + "/ai");
                                    } else {
                                        this.props.history.push(path + "ai");
                                    }
                                }}
                            />
                            <Button
                                label="Multiplayer"
                                onClick={() => {
                                    if (splitArr.length === 3) {
                                        this.props.history.push(
                                            path + "/multiplayer"
                                        );
                                    } else {
                                        this.props.history.push(
                                            path + "multiplayer"
                                        );
                                    }
                                }}
                            />
                        </div>
                    </Card>
                </div>
            );
        } else {
            this.props.history.replace("/404");
        }
    }

    render() {
        return this.renderMenu();
    }
}

export default withRouter(TicTacToeHome);
