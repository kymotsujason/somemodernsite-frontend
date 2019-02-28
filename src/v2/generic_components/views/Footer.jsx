import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Panel from "../components/Panel";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (
            !window.confirm(
                "You are leaving jasonyue to visit an external site"
            )
        ) {
            e.preventDefault();
        }
    }

    render() {
        let navURL = window.location.href.split("/");
        return (
            <div>
                <Panel footer={true}>
                    <div className="center_content center_text">
                        <div>
                            <FontAwesomeIcon icon={faCopyright} />
                            <span> 2018 - 2019 Jason Yue - Powered by </span>
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kymotsujason/somemodernsite-backend"
                                onClick={e => this.handleClick(e)}
                            >
                                Django
                            </a>
                            <span> & </span>
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kymotsujason/somemodernsite-frontend"
                                onClick={e => this.handleClick(e)}
                            >
                                React
                            </a>
                            <span> - </span>
                            {navURL[3] === "privacy" ? (
                                <span style={{ color: "lightgray" }}>
                                    Privacy Policy
                                </span>
                            ) : (
                                <NavLink
                                    style={{ color: "white" }}
                                    to={"/privacy"}
                                >
                                    <span>Privacy Policy</span>
                                </NavLink>
                            )}
                        </div>
                        <div className="center_content center_text">
                            <NavLink style={{ color: "white" }} to={"/v1"}>
                                <span>v1</span>
                            </NavLink>
                            <span> - v2</span>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Footer;
