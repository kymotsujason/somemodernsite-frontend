import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Panel from "./../../../../generic_components/components/Panel";
import { PropTypes } from "prop-types";
import NotFound from "./../../../../generic_components/views/NotFound";
import Singleplayer from "./Singleplayer";
import StylizedButton from "./../../../../generic_components/components/StylizedButton";
import randomstring from "randomstring";
import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import Multiplayer from "./Multiplayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class TicTacToeHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wrong: false,
            visible: false,
            id: ""
        };

        this.renderMenu = this.renderMenu.bind(this);
        this.renderOverlay = this.renderOverlay.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    renderOverlay() {
        return (
            <Sidebar
                visible={this.state.visible}
                style={{
                    backgroundColor: "rgb(20, 21, 27)",
                    color: "white"
                }}
                position="bottom"
                baseZIndex={1000000}
                showCloseIcon={true}
                dismissable={true}
                onHide={() => this.setState({ visible: false })}
            >
                <div className="center_content">
                    <div className="center_text">
                        <div className="p-grid p-fluid">
                            <div className="p-col-12">
                                <label style={{ color: "lightgray" }}>
                                    Enter the ID*
                                </label>
                                <InputText
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "white"
                                    }}
                                    placeholder="id"
                                    keyfilter="alphanum"
                                    value={this.state.id}
                                    maxLength={5}
                                    onChange={e => {
                                        this.setState({
                                            id: e.target.value
                                        });
                                    }}
                                />
                                {this.state.id.trim() === "" ||
                                !isAlphanumeric(this.state.id) ||
                                this.state.id.length !== 5 ? (
                                        <label style={{ color: "red" }}>
                                        Invalid id
                                        </label>
                                    ) : (
                                        <StylizedButton
                                            text="Join"
                                            url={
                                                "/projects/tic-tac-toe/multiplayer/" +
                                            this.state.id +
                                            "/"
                                            }
                                        />
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        );
    }

    renderMenu() {
        let url = window.location.href.split("/");
        if (url.length <= 6) {
            return (
                <div>
                    <StylizedButton
                        text="Singleplayer"
                        width="250px"
                        url="/projects/tic-tac-toe/singleplayer/"
                    />
                    <StylizedButton
                        text="Multiplayer"
                        width="250px"
                        url="/projects/tic-tac-toe/multiplayer/"
                    />
                </div>
            );
        } else {
            if (url.length <= 7) {
                if (url[5] === "singleplayer") {
                    return (
                        <div>
                            <StylizedButton
                                text="Back"
                                width="250px"
                                url="/projects/tic-tac-toe/"
                            />
                            <Singleplayer />
                        </div>
                    );
                } else if (url[5] === "multiplayer") {
                    return (
                        <div>
                            <StylizedButton
                                text="Host game"
                                width="250px"
                                url={
                                    "/projects/tic-tac-toe/multiplayer/" +
                                    randomstring.generate(5) +
                                    "/"
                                }
                            />
                            <div
                                style={{
                                    width: "250px",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                                onClick={() => this.setState({ visible: true })}
                            >
                                <StylizedButton
                                    text="Join game"
                                    width="250px"
                                />
                            </div>

                            <StylizedButton
                                text="Back"
                                width="250px"
                                url="/projects/tic-tac-toe/"
                            />

                            {this.state.visible ? this.renderOverlay() : null}
                        </div>
                    );
                } else {
                    this.setState({
                        wrong: true
                    });
                }
            } else if (url.length <= 8 && url[5] === "multiplayer") {
                return (
                    <div>
                        <StylizedButton
                            text="Back"
                            width="250px"
                            url="/projects/tic-tac-toe/multiplayer/"
                        />
                        <Multiplayer id={url[6]} />
                    </div>
                );
            } else {
                this.setState({
                    wrong: true
                });
            }
        }
    }

    render() {
        return !this.state.wrong ? (
            <div>
                <Panel>
                    <div className="center_content push_down">
                        <FontAwesomeIcon
                            style={{
                                cursor: "pointer",
                                marginTop: "2em",
                                marginLeft: "-1em"
                            }}
                            icon={faArrowLeft}
                            size="2x"
                            onClick={this.goBack}
                        />
                        <span className="description"> Back</span>
                    </div>
                    <div
                        className="center_content"
                        style={{ marginBottom: "2em" }}
                    >
                        <div
                            style={{
                                marginBottom: "1em",
                                paddingLeft: "1em"
                            }}
                        >
                            <span className="work_exp">
                                <p className="title">Tic-tac-toe</p>
                                <p className="subtitle">
                                    Everybody knows the game called tic-tac-toe.
                                    It's such a simple game, that the official
                                    react tutorial involves creating a
                                    tic-tac-toe game. This project was initially
                                    created from the react tutorial. It has been
                                    expanded upon through the introduction of an
                                    AI and multiplayer feature. The AI is
                                    server-sided and will play perfectly. It's
                                    written in Python and is essentially
                                    hard-coded, taking note of the positions
                                    where a checkmate is likely. The multiplayer
                                    mode uses a 5 letter alphanumeric id to
                                    connect users together. You can either host
                                    a game or join one. There is no
                                    lobby/browser for the games, all you need is
                                    the id. All server-sided interactions (AI,
                                    multi) are done through websockets, which is
                                    handled by Django.
                                </p>
                            </span>
                        </div>
                        {this.renderMenu()}
                    </div>
                </Panel>
            </div>
        ) : (
            <NotFound />
        );
    }
}

TicTacToeHome.propTypes = {
    history: PropTypes.object
};

export default withRouter(TicTacToeHome);
