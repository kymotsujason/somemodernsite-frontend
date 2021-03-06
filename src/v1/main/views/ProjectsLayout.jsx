import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import Typist from "react-typist";
import Projects from "./Projects";

import { projects_items } from "../assets/projects_preview";

class ProjectsLayout extends Component {
    render() {
        return (
            <div className="spacing main_container">
                <Card className="g-col-6 center_text">
                    <Typist
                        className="typist"
                        avgTypingSpeed={50}
                        startDelay={300}
                    >
                        <span>Projects</span>
                    </Typist>
                </Card>
                <br />
                <Projects projects_items={projects_items} />
            </div>
        );
    }
}

export default ProjectsLayout;
