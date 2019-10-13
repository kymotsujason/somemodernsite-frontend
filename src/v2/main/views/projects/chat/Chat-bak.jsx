import React, { Component } from "react";
import WebSocketInstance from "./../../../components/Websocket";
import { InputText } from "primereact/inputtext";
import CustomButton from "../../../../generic_components/components/CustomButton";
import { socket_url } from "../../../components/static_socket";
import { PropTypes } from "prop-types";
import Loader from "react-loader-spinner";
import Panel from "./../../../../generic_components/components/Panel";
import io from "socket.io-client";
import "./css/chat.css";

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            messages: "",
            users: [],
            connected: false
        };

        const socket = io("http://localhost:5005");
        socket.emit("connected", this.props.currentUser);
        socket.on("client-connected", data => { console.log(data); });
        WebSocketInstance.connect(socket_url + "chat");
        this.waitForSocketConnection(() => {
            this.setState({ connected: true });
            this.sendEvent("connected");
            WebSocketInstance.addCallbacksMulti(
                this.addMessage.bind(this),
                this.receiveEvent.bind(this)
            );
        });
    }

    componentDidMount() {
        window.addEventListener("beforeunload", ev => {
            ev.preventDefault();
            return this.sendEvent("disconnected");
        });
    }

    componentDidUpdate() {
        if (this.state.connected) {
            this.scrollToBottom();
        }
    }

    componentWillUnmount() {
        this.sendEvent("disconnected");
        window.removeEventListener("beforeunload", ev => {
            ev.preventDefault();
            return this.sendEvent("disconnected");
        });
        WebSocketInstance.disconnect();
    }

    scrollToBottom() {
        const chat = this.messagesEnd;
        const scrollHeight = chat.scrollHeight;
        const height = chat.clientHeight;
        const maxScrollTop = scrollHeight - height;
        chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }

    addMessage(message) {
        this.setState({ messages: [...this.state.messages, message] });
    }

    sendMessageHandler(e, message) {
        if (message.trim() !== "") {
            const messageObject = {
                from: this.props.currentUser,
                text: message
            };
            WebSocketInstance.newChatMessage(messageObject);
            this.setState({
                message: ""
            });
        }
        e.preventDefault();
    }

    receiveEvent(message) {
        if (message.content === "connected") {
            if (
                message.author !== this.props.currentUser &&
                !this.state.users.includes(message.author)
            ) {
                this.sendEvent("ack");
            }
            const userList = [...this.state.users];
            userList.push(message.author);
            this.setState({
                users: userList
            });
        } else if (message.content === "disconnected") {
            const userList = [...this.state.users];
            var index = userList.indexOf(message.author);
            userList.splice(index, 1);
            this.setState({
                users: userList
            });
        } else if (
            message.content === "ack" &&
            message.author !== this.props.currentUser
        ) {
            const userList = [...this.state.users];
            userList.push(message.author);
            this.setState({
                users: userList
            });
        }
    }

    sendEvent(message) {
        const messageObject = {
            from: this.props.currentUser,
            text: message
        };
        WebSocketInstance.newChatEvent(messageObject);
    }

    renderMessages(messages) {
        const currentUser = this.props.currentUser;
        return messages.map((message, i) => (
            <li
                id={i}
                key={message.content}
                className={message.author === currentUser ? "me" : "him"}
            >
                <h4 className="author">{message.author} </h4>
                <p>{message.content}</p>
            </li>
        ));
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

    render() {
        if (this.state.connected) {
            const messages = this.state.messages;
            const currentUser = this.props.currentUser;
            return (
                <div className="p-grid">
                    <div className="chat2 p-col-9-auto center_text">
                        <div className="container2">
                            <h1>Chatting as {currentUser} </h1>
                            <ul
                                ref={el => {
                                    this.messagesEnd = el;
                                }}
                            >
                                {messages && this.renderMessages(messages)}
                            </ul>
                        </div>
                        <div className="container2 message-form2">
                            <span>
                                <InputText
                                    style={{ width: "90%" }}
                                    value={this.state.message}
                                    onChange={e =>
                                        this.setState({
                                            message: e.target.value
                                        })
                                    }
                                    onKeyPress={e => {
                                        if (e.key === "Enter") {
                                            this.sendMessageHandler(
                                                e,
                                                this.state.message
                                            );
                                        }
                                    }}
                                />
                                <CustomButton
                                    style={{
                                        width: "10%",
                                        height: "50px"
                                    }}
                                    icon="paper-plane"
                                    iconLocation="center"
                                    onClick={e =>
                                        this.sendMessageHandler(
                                            e,
                                            this.state.message
                                        )
                                    }
                                />
                            </span>
                        </div>
                    </div>
                    <div className="p-col-3-auto">
                        <Panel light={true}>
                            <p className="center_text">Currently connected: </p>
                            <ul>
                                {this.state.users.map(users => (
                                    <span key={users}>
                                        <figure className="status" />
                                        <p
                                            key={users}
                                            style={{
                                                color: "white",
                                                paddingLeft: "2.5em"
                                            }}
                                        >
                                            {users}
                                        </p>
                                    </span>
                                ))}
                            </ul>
                        </Panel>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="center_text">
                    <Loader type="Bars" color="#FFFFFF" />
                    Connecting...
                </div>
            );
        }
    }
}

Chat.propTypes = {
    currentUser: PropTypes.string
};

export default Chat;
