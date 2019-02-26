import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/code.png";

class Resume extends Component {
    render() {
        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader">
                                Explore my skills and accomplishments
                            </p>
                            <p
                                className="header"
                                style={{ marginBottom: "0.45em" }}
                            >
                                Take a closer look
                            </p>
                            <div
                                className="pseudo_button center_content custom_button"
                                style={{
                                    width: "200px",
                                    height: "50px",
                                    marginBottom: "3em"
                                }}
                            >
                                <NavLink to="/static/bundles/media/2019-Jason_Yue-Resume.pdf">
                                    <div
                                        style={{
                                            padding: "1em",
                                            marginLeft: "-2em",
                                            color: "white"
                                        }}
                                    >
                                        Download Resume
                                    </div>
                                </NavLink>
                            </div>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span className="p-grid-centered">
                            <p className="p-col-3-auto subtitle">
                                Technologies
                            </p>
                            <p className="p-col-9-auto description">
                                <div className="p-grid">
                                    <span className="p-col-6-auto">
                                        <p className="bold uppercase white">
                                            Comfortable with
                                        </p>
                                        <p>
                                            <ul>
                                                <li>React.js</li>
                                                <li>JavaScript / JQuery</li>
                                                <li>PHP</li>
                                                <li>HTML5 / CSS3</li>
                                                <li>Python / Django</li>
                                                <li>Java</li>
                                                <li>C++ / QT</li>
                                                <li>C# / .NET</li>
                                                <li>SQL / MySQL / MongoDB</li>
                                                <li>Version Control / Git</li>
                                                <li>
                                                    Amazon Web Service (AWS)
                                                </li>
                                                <li>Nginx / Apache</li>
                                                <li>uWSGI / Daphne</li>
                                                <li>
                                                    Responsive Layout and Design
                                                </li>
                                                <li>Agile Methodology</li>
                                            </ul>
                                        </p>
                                    </span>
                                    <span className="p-col-6-auto">
                                        <p className="bold uppercase white">
                                            Experienced with
                                        </p>
                                        <p>
                                            <ul>
                                                <li>Node.js</li>
                                                <li>Redux (limited)</li>
                                                <li>Electron.js (limited)</li>
                                                <li>Drupal</li>
                                                <li>Swift</li>
                                                <li>C / Objective-C</li>
                                                <li>PostgreSQL (limited)</li>
                                                <li>Docker (limited)</li>
                                                <li>
                                                    Behavior Driven Development
                                                    / Testing
                                                </li>
                                                <li>
                                                    Unit Testing / Integration
                                                    Testing (limited)
                                                </li>
                                                <li>Photoshop / Illustrator</li>
                                                <li>
                                                    Cross-Browser Compatibility
                                                </li>
                                            </ul>
                                        </p>
                                    </span>
                                </div>
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <div className="p-grid-centered">
                            <p className="p-col-3-auto subtitle">
                                Work Experience
                            </p>
                            <div className="p-col-9-auto description">
                                <div className="work_exp">
                                    <p className="bold uppercase white">
                                        Junior Web Developer
                                    </p>
                                    <p>
                                        <span className="bold white">
                                            ImageX Media
                                        </span>
                                        , Vancouver, BC, May 2017 - December
                                        2017
                                        <br />
                                        Created automated behavioral testing
                                        system using Behat for large-scale
                                        academic websites. Created testing phase
                                        in OpenEDU CI/CD using the automated
                                        behavioral testing system. Performed QA
                                        with Jira workflow. Worked closely with
                                        clients to design a prototype front-end.
                                        Implemented optimizations and bug fixes
                                        for mobile front-end. Redesigned legacy
                                        back-end database API for modern use
                                    </p>
                                </div>
                                <div className="work_exp">
                                    <p className="bold uppercase white">
                                        Volunteer IT Technician
                                    </p>
                                    <p>
                                        <span className="bold white">
                                            PMC Sierra
                                        </span>
                                        , Burnaby, BC, April 2013 - May 2013
                                        <br />
                                        Answered internal support calls and
                                        tickets. Resolved networking, software,
                                        and hardware issues
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <div className="p-grid-centered">
                            <p className="p-col-3-auto subtitle">Education</p>
                            <div className="p-col-9-auto description">
                                <span className="work_exp">
                                    <p className="bold uppercase">
                                        Bachelor of Applied Science - Computer
                                        Science
                                    </p>
                                    <p>
                                        Trinity Western University, Langley, BC,
                                        2014-2018
                                    </p>
                                </span>
                                <span className="work_exp">
                                    <p className="bold uppercase">
                                        ACE-IT Computer Networking Technician
                                    </p>
                                    <p>
                                        Burnaby South Secondary, Burnaby, BC,
                                        2012-2013
                                    </p>
                                </span>
                                <span className="work_exp">
                                    <p className="bold uppercase">
                                        General Education
                                    </p>
                                    <p>
                                        Burnaby South Secondary, Burnaby, BC,
                                        2009-2014
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                Hire an exceptional web developer today
                            </p>
                            <p className="description">
                                Now you know what I've done and what I can do,
                                feel free to reach out and start a conversation.
                            </p>
                            <p>
                                <div
                                    className="pseudo_button center_content custom_button"
                                    style={{
                                        width: "200px",
                                        height: "50px",
                                        marginBottom: "3em"
                                    }}
                                >
                                    <NavLink to="/contact">
                                        <div
                                            style={{
                                                padding: "1em",
                                                marginLeft: "-2em",
                                                color: "white"
                                            }}
                                        >
                                            Contact me
                                        </div>
                                    </NavLink>
                                </div>
                            </p>
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Resume;
