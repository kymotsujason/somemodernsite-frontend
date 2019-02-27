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
        return (
            <div>
                <Panel footer={true}>
                    <div className="center_content center_text">
                        <p>
                            <FontAwesomeIcon icon={faCopyright} /> 2018 - 2019
                            Jason Yue - Powered by{" "}
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kymotsujason/somemodernsite-backend"
                                onClick={e => this.handleClick(e)}
                            >
                                Django
                            </a>{" "}
                            and{" "}
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kymotsujason/somemodernsite-frontend"
                                onClick={e => this.handleClick(e)}
                            >
                                React
                            </a>{" "}
                            -{" "}
                            <NavLink style={{ color: "white" }} to={"/privacy"}>
                                Privacy Policy
                            </NavLink>
                        </p>
                        <div className="center_content center_text">
                            <NavLink style={{ color: "white" }} to={"/v1"}>
                                v1
                            </NavLink>
                            - v2
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Footer;
