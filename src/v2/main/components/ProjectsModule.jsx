import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { projectsData } from "../assets/projects_preview";
import { Picture } from "react-responsive-picture";

class ProjectsModule extends Component {
    constructor(props) {
        super(props);

        this.renderModule = this.renderModule.bind(this);
    }

    renderModule(projectsData) {
        let limit = this.props.limit;
        let counter = 1;
        let cardMenu = [];
        for (var project in projectsData) {
            cardMenu.push(
                <div
                    key={projectsData[project].index}
                    className="p-col-4-auto"
                    style={{
                        padding: "2em",
                        borderColor: "gray",
                        borderWidth: "1px",
                        borderStyle: "solid"
                    }}
                >
                    <div className="card_height">
                        <NavLink to={projectsData[project].url}>
                            <div className="center_text">
                                <Picture
                                    className="project_image"
                                    alt={projectsData[project].alt}
                                    sources={[
                                        {
                                            srcSet:
                                                projectsData[project].img_768,
                                            media: "(max-width: 768px)"
                                        },
                                        {
                                            srcSet:
                                                projectsData[project].img_992,
                                            media: "(max-width: 992px)"
                                        },
                                        {
                                            srcSet:
                                                projectsData[project].img_1470,
                                            media: "(max-width: 1470px)"
                                        },
                                        {
                                            srcSet: projectsData[project].img
                                        }
                                    ]}
                                />
                            </div>
                        </NavLink>
                        <div style={{ fontSize: "2em", marginBottom: "-1em" }}>
                            <p>{projectsData[project].title}</p>
                        </div>
                        <div style={{ fontSize: "0.85em" }}>
                            <p>{projectsData[project].date}</p>
                        </div>
                        <div className="description">
                            <p>{projectsData[project].description}</p>
                        </div>
                    </div>
                    <div style={{ paddingTop: "2em" }}>
                        <NavLink to={projectsData[project].url}>
                            <span
                                style={{
                                    textDecoration: "underline",
                                    color: "white"
                                }}
                            >
                                See more
                            </span>
                        </NavLink>
                    </div>
                </div>
            );
            if (counter < limit) {
                counter++;
            } else if (counter === limit) {
                break;
            }
        }

        return cardMenu;
    }

    render() {
        return this.renderModule(projectsData);
    }
}

ProjectsModule.propTypes = {
    projectsData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    limit: PropTypes.number
};

export default ProjectsModule;
