import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import Mailto from "react-protected-mailto";
import StylizedButton from "./../../generic_components/components/StylizedButton";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: false
        };
    }

    render() {
        if (document.title !== "Hire a Skilled Developer") {
            document.title = "Learn About My Journey";
        }

        return (
            <div>
                <Panel className="contact">
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader shadow">
                                Reach out and send me a friendly greeting
                            </p>
                            <p className="header shadow panel_bottom_space">
                                Let's have a chat
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    {this.state.email ? (
                        <div className="center_text center_content">
                            <div
                                style={{
                                    width: "250px",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                                onClick={() => this.setState({ email: false })}
                            >
                                <StylizedButton text="Back" width="250px" />
                            </div>

                            <p className="subtitle" style={{ color: "white" }}>
                                Click on the email below or type it in your
                                preferred mail client.
                            </p>
                            <Mailto email="kymotsujason@gmail.com" />
                        </div>
                    ) : (
                        <div
                            className="pseudo_button center_content"
                            style={{
                                paddingBottom: "1em",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                width: "300px",
                                height: "300px"
                            }}
                            onClick={() => this.setState({ email: true })}
                        >
                            <div>
                                <p className="title">Email</p>
                                <p className="description">
                                    Feel free to reach out and send me an email.
                                </p>
                            </div>
                        </div>
                    )}
                </Panel>
                {this.state.visible ? this.renderOverlay() : null}
                <Panel className="contact_map">
                    <div className="center_content">
                        <span
                            className="center_text"
                            style={{ color: "black" }}
                        >
                            <p className="header" />
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Contact;
