import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBitbucket } from "@fortawesome/free-brands-svg-icons";
import { faQuora } from "@fortawesome/free-brands-svg-icons";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";
// import { faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
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
                            <a
                                style={{ color: "white" }}
                                href="https://www.linkedin.com/in/kaisrisque/"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kaisrisque"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://bitbucket.org/kaisrisque/"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faBitbucket} size="2x" />
                            </a>
                            {/* <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://www.hackerrank.com/kymotsujason"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon
                                    icon={faHackerrank}
                                    size="2x"
                                />
                            </a> */}
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://www.quora.com/profile/Jason-2082"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faQuora} size="2x" />
                            </a>
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://soundcloud.com/kaisrisque"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon
                                    icon={faSoundcloud}
                                    size="2x"
                                />
                            </a>
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://www.youtube.com/c/kaisrisque"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <span> </span>
                            <a
                                style={{ color: "white" }}
                                href="https://steamcommunity.com/id/kaisrisque/"
                                onClick={e => this.handleClick(e)}
                            >
                                <FontAwesomeIcon icon={faSteam} size="2x" />
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCopyright} />
                            <span> 2018 - 2019 Jason Yue - Powered by </span>
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kaisrisque/somemodernsite-backend"
                                onClick={e => this.handleClick(e)}
                            >
                                Node
                            </a>
                            <span> & </span>
                            <a
                                style={{ color: "white" }}
                                href="https://github.com/kaisrisque/somemodernsite-frontend"
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
                        <div>
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
