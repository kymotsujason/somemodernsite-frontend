import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import { Sidebar } from "primereact/sidebar";
import Mailto from "react-protected-mailto";
import contact_img from "../assets/contact.jpg";
import map_img from "../assets/map.jpg";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            subject: "",
            firstName: "",
            lastName: "",
            email: "",
            validEmail: false,
            visible: false,
            textError: "gray",
            subjectError: "gray",
            firstNameError: "gray",
            lastnameError: "gray",
            emailError: "gray"
        };

        this.renderOverlay = this.renderOverlay.bind(this);
    }

    renderOverlay() {
        return (
            <Sidebar
                className="custom_sidebar"
                visible={this.state.visible}
                style={{
                    background: "transparent",
                    borderColor: "transparent"
                }}
                baseZIndex={1000000}
                showCloseIcon={true}
                dismissable={true}
                onHide={() => this.setState({ visible: false })}
            >
                <Panel>
                    <div className="center_text">
                        <p className="subtitle" style={{ color: "white" }}>
                            Click on the email below or type it in your
                            preferred mail client.
                        </p>
                        <Mailto email="kymotsujason@gmail.com" />
                    </div>
                </Panel>
            </Sidebar>
        );
    }

    render() {
        if (document.title !== "Hire a Skilled Developer") {
            document.title = "Learn About My Journey";
        }

        return (
            <div>
                <Panel img={contact_img}>
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader shadow">
                                Reach out and send me a friendly greeting
                            </p>
                            <p
                                className="header shadow panel_bottom_space"
                            >
                                Let's have a chat
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div
                        className="pseudo_button center_content"
                        style={{
                            paddingBottom: "2.5em",
                            width: "300px",
                            height: "300px"
                        }}
                        onClick={() => this.setState({ visible: true })}
                    >
                        <div>
                            <p className="title">Email</p>
                            <p className="description">
                                Feel free to reach out and send me an email.
                            </p>
                        </div>
                    </div>
                </Panel>
                {this.state.visible ? this.renderOverlay() : null}
                <Panel img={map_img}>
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
