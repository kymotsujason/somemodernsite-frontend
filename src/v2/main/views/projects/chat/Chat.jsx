import React from "react";

const Chat = () => {
    const [connected, setConnected] = React.useState(false);

    if (connected) {
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
};

export default Chat;
