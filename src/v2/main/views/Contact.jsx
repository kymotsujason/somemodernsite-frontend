import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/Code.png";

class Contact extends Component {
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
                <Panel>
                    <div className="center_content">Contact Form</div>
                </Panel>
                <div>Map</div>
            </div>
        );
    }
}

export default Contact;
