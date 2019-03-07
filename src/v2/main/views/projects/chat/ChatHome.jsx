import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Panel from "./../../../../generic_components/components/Panel";
import Chat from "./Chat";
import Login from "./Login";
import NotFound from "../../../../generic_components/views/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class ChatHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: "",
            loggedIn: false
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    handleLogin(currentUser) {
        this.setState({
            currentUser: currentUser,
            loggedIn: true
        });
    }

    renderMenu() {
        return (
            <div>
                {this.state.loggedIn ? (
                    <Chat currentUser={this.state.currentUser} />
                ) : (
                    <Login onLogin={this.handleLogin} />
                )}
            </div>
        );
    }

    render() {
        let url = window.location.href.split("/");
        return url.length <= 6 ? (
            <div>
                <Panel>
                    <div className="center_blog_content push_down">
                        <FontAwesomeIcon
                            style={{ cursor: "pointer", marginTop: "2em" }}
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
                                paddingLeft: "5em"
                            }}
                        >
                            <span className="work_exp">
                                <p className="title">Realtime Chat</p>
                                <p className="subtitle">
                                    The most basic form of communication comes
                                    in the form of IRC. IRC has existed since
                                    the 1980s and still exists today, though in
                                    many different forms. It is also a great way
                                    to learn about sockets and realtime handling
                                    of messages. I followed a tutorial that
                                    helped me get a foundation in using
                                    websockets, before expanding upon it and
                                    creating my own event system, which sends
                                    messages to keep track of users who have
                                    connected and the messages that are send.
                                    The online userlist is a feature that uses
                                    this event system. The messages are sent and
                                    broadcasted to all users who are connected.
                                    The client who went the message doesn't
                                    actually register the message, but sends it
                                    to the server to be broadcasted. The
                                    performance is fast enough so that it
                                    doesn't have any delay and the experience is
                                    smooth. The advantage of this approach is
                                    that I have absolute control over the
                                    messages and can censor or modify messages
                                    in any way I want. No messages are being
                                    stored though.
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

ChatHome.propTypes = {
    history: PropTypes.object
};

export default withRouter(ChatHome);
