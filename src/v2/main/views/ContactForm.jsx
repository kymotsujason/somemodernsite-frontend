import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import { Sidebar } from "primereact/sidebar";
import Mailto from "react-protected-mailto";
import code_img from "../assets/code.png";

import isEmail from "validator/lib/isEmail";
import CustomButton from "../../generic_components/components/CustomButton";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

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
        this.handleEmailForm = this.handleEmailForm.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handleText(text) {
        if (text.trim() === "") {
            if (this.state.textError !== "red") {
                this.setState({ textError: "red" });
            }
        } else {
            if (this.state.textError !== "green") {
                this.setState({ textError: "green" });
            }
        }
    }

    handleSubject(subject) {
        if (subject.trim() === "") {
            if (this.state.subjectError !== "red") {
                this.setState({ subjectError: "red" });
            }
        } else {
            if (this.state.subjectError !== "green") {
                this.setState({ subjectError: "green" });
            }
        }
    }

    handleLastName(lastName) {
        if (lastName.trim() === "") {
            if (this.state.lastnameError !== "red") {
                this.setState({ lastnameError: "red" });
            }
        } else {
            if (this.state.lastnameError !== "green") {
                this.setState({ lastnameError: "green" });
            }
        }
    }

    handleFirstName(firstName) {
        if (firstName.trim() === "") {
            if (this.state.firstNameError !== "red") {
                this.setState({ firstNameError: "red" });
            }
        } else {
            if (this.state.firstNameError !== "green") {
                this.setState({ firstNameError: "green" });
            }
        }
    }

    handleEmail(email) {
        if (email.trim() === "") {
            if (this.state.emailError !== "red") {
                this.setState({ emailError: "red", validEmail: false });
            }
        } else {
            if (isEmail(email)) {
                if (this.state.emailError !== "green") {
                    this.setState({ emailError: "green", validEmail: true });
                }
            } else {
                this.setState({ emailError: "red", validEmail: false });
            }
        }
    }

    handleEmailForm() {
        let requiredFields = 5;
        if (this.state.text.trim() === "") {
            if (this.state.textError !== "red") {
                this.setState({ textError: "red" });
            }
            requiredFields--;
        } else {
            if (this.state.textError !== "green") {
                this.setState({ textError: "green" });
            }
        }
        if (this.state.subject.trim() === "") {
            if (this.state.subjectError !== "red") {
                this.setState({ subjectError: "red" });
            }
            requiredFields--;
        } else {
            if (this.state.subjectError !== "green") {
                this.setState({ subjectError: "green" });
            }
        }
        if (this.state.firstName.trim() === "") {
            if (this.state.firstNameError !== "red") {
                this.setState({ firstNameError: "red" });
            }
            requiredFields--;
        } else {
            if (this.state.firstNameError !== "green") {
                this.setState({ firstNameError: "green" });
            }
        }
        if (this.state.lastName.trim() === "") {
            if (this.state.lastnameError !== "red") {
                this.setState({ lastnameError: "red" });
            }
            requiredFields--;
        } else {
            if (this.state.lastnameError !== "green") {
                this.setState({ lastnameError: "green" });
            }
        }
        if (this.state.email.trim() === "") {
            if (this.state.emailError !== "red") {
                this.setState({ emailError: "red", validEmail: false });
            }
            requiredFields--;
        } else {
            if (isEmail(this.state.email)) {
                if (this.state.emailError !== "green") {
                    this.setState({ emailError: "green", validEmail: true });
                }
            } else {
                this.setState({ emailError: "red", validEmail: false });
                requiredFields--;
            }
        }

        if (requiredFields === 5) {
            <Mailto
                email="kymotsujason@gmail.com"
                headers={
                    ({
                        subject:
                            "[jasonyue.ca|" +
                            this.state.firstName +
                            " " +
                            this.state.lastName +
                            "] " +
                            this.state.subject
                    },
                    { body: this.state.text },
                    { from: this.state.email })
                }
            />;
        }
    }

    renderOverlay() {
        let textError = {
            backgroundColor: "transparent",
            color: "white",
            borderColor: this.state.textError
        };
        let subjectError = {
            backgroundColor: "transparent",
            color: "white",
            borderColor: this.state.subjectError
        };
        let firstNameError = {
            backgroundColor: "transparent",
            color: "white",
            borderColor: this.state.firstNameError
        };
        let lastnameError = {
            backgroundColor: "transparent",
            color: "white",
            borderColor: this.state.lastnameError
        };
        let emailError = {
            backgroundColor: "transparent",
            color: "white",
            borderColor: this.state.emailError
        };

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
                        <div className="p-grid p-fluid">
                            <div className="p-col-12">
                                <label style={{ color: "lightgray" }}>
                                    Email*
                                </label>
                                <InputText
                                    style={emailError}
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={e => {
                                        this.setState({
                                            email: e.target.value
                                        });
                                        this.handleEmail(e.target.value);
                                    }}
                                />
                                {this.state.email.trim() !== "" &&
                                !this.state.validEmail ? (
                                        <label style={{ color: "red" }}>
                                        Invalid Email Address
                                        </label>
                                    ) : null}
                            </div>
                            <div className="p-col-12">
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <div className="p-grid p-fluid">
                                            <div className="p-col-12">
                                                <label
                                                    style={{
                                                        color: "lightgray"
                                                    }}
                                                >
                                                    First Name*
                                                </label>
                                            </div>
                                            <div className="p-col-12">
                                                <InputText
                                                    style={firstNameError}
                                                    placeholder="First name"
                                                    value={this.state.firstName}
                                                    onChange={e => {
                                                        this.setState({
                                                            firstName:
                                                                e.target.value
                                                        });
                                                        this.handleFirstName(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-col-6">
                                        <div className="p-grid">
                                            <div className="p-col-12">
                                                <label
                                                    style={{
                                                        color: "lightgray"
                                                    }}
                                                >
                                                    Last Name*
                                                </label>
                                            </div>
                                            <div className="p-col-12">
                                                <InputText
                                                    style={lastnameError}
                                                    placeholder="Last name"
                                                    value={this.state.lastName}
                                                    onChange={e => {
                                                        this.setState({
                                                            lastName:
                                                                e.target.value
                                                        });
                                                        this.handleLastName(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-col-12">
                                <label style={{ color: "lightgray" }}>
                                    Subject*
                                </label>
                                <InputText
                                    style={subjectError}
                                    placeholder="Subject"
                                    value={this.state.subject}
                                    onChange={e => {
                                        this.setState({
                                            subject: e.target.value
                                        });
                                        this.handleSubject(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="p-col-12">
                                <label style={{ color: "lightgray" }}>
                                    Message*
                                </label>
                                <InputTextarea
                                    style={textError}
                                    placeholder="Message"
                                    rows={5}
                                    cols={30}
                                    value={this.state.text}
                                    onChange={e => {
                                        this.setState({ text: e.target.value });
                                        this.handleText(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="p-col-12">
                                <CustomButton
                                    label="Send"
                                    style={{ height: "30px" }}
                                    onClick={() => this.handleEmailForm()}
                                />
                            </div>
                        </div>
                    </div>
                </Panel>
            </Sidebar>
        );
    }

    render() {
        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="subheader">
                                Reach out and send me a friendly hello
                            </p>
                            <p className="header">Let's have a chat</p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div
                        className="pseudo_button center_content"
                        style={{
                            width: "250px",
                            height: "250px"
                        }}
                        onClick={() => this.setState({ visible: true })}
                    >
                        <div>
                            <p className="title">Email</p>
                            <p className="text">
                                Feel free to reach out and send me an email.
                            </p>
                        </div>
                    </div>
                </Panel>
                {this.state.visible ? this.renderOverlay() : null}
            </div>
        );
    }
}

export default Contact;
