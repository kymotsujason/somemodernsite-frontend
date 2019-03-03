import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import project_img from "../assets/project.jpg";
import ProjectsModule from "./../components/ProjectsModule";

class Projects extends Component {
    render() {
        if (document.title !== "Road to accumulating experience") {
            document.title = "Road to accumulating experience";
        }

        return (
            <div>
                <Panel img={project_img}>
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader shadow">
                                My work as a fullstack web developer
                            </p>
                            <p className="header shadow panel_bottom_space">
                                My Projects and portfolio
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                I'm a dedicated full-stack developer
                            </p>
                            <p className="subtitle">
                                With experience in various technologies and
                                platforms, I am confident in my skills as a
                                full-stack developer. There is no design I can't
                                implement and no algorithm I can't build. Below
                                are some of my projects that showcase my skills
                                and programming comptency.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <p
                            className="title center_text"
                            style={{ marginBottom: "1em" }}
                        >
                            Web Projects
                        </p>
                        <div
                            className="center_content p-grid-centered"
                            style={{
                                marginBottom: "4em"
                            }}
                        >
                            <ProjectsModule />
                        </div>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p
                                className="title"
                                style={{ marginBottom: "0px" }}
                            >
                                Software Projects
                            </p>
                            <p
                                className="subtitle"
                                style={{ fontStyle: "italic" }}
                            >
                                Coming soon
                            </p>
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Projects;
