import React, { Component } from "react";
import Time from "../components/Time";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="center_text footer_bar">
                    <div className="p-col-1" />
                    <p>
                        <FontAwesomeIcon icon={faCopyright} /> 2018 - 2019 Jason
                        Yue - Powered by{" "}
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
                        <NavLink style={{ color: "#5b63ff" }} to={"/privacy"}>
                            Privacy
                        </NavLink>
                    </p>
                    <Time />
                    <div>
                        <div className="center_content center_text">
                            <span style={{ color: "lightgray" }}>v1 - </span>
                            <NavLink style={{ color: "white" }} to={"/"}>
                                v2
                            </NavLink>
                        </div>
                    </div>
                    <div className="p-col-1" />
                </div>
            </div>
        );
    }
}

export default Footer;
