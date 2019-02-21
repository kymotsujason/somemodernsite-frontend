import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Panel from "../components/Panel";

class Footer extends Component {
    render() {
        return (
            <div>
                <Panel footer={true}>
                    <div className="center_content center_text">
                        <div className="p-col-1" />
                        <p>
                            <FontAwesomeIcon icon={faCopyright} /> 2018 - 2019
                            Jason Yue - Powered by{" "}
                            <a
                                style={{ color: "#5b63ff" }}
                                href="https://github.com/kymotsujason/somemodernsite-backend"
                            >
                                Django
                            </a>{" "}
                            and{" "}
                            <a
                                style={{ color: "#5b63ff" }}
                                href="https://github.com/kymotsujason/somemodernsite-frontend"
                            >
                                React
                            </a>{" "}
                            -{" "}
                            <NavLink
                                style={{ color: "#5b63ff" }}
                                to={"/privacy"}
                            >
                                Privacy
                            </NavLink>
                        </p>
                        <div className="p-col-1" />
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Footer;
