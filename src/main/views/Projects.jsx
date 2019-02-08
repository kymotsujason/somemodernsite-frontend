import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import FlipCard from "../components/FlipCard";
import { PropTypes } from "prop-types";

class Projects extends Component {
    render() {
        return (
            <Card className="g-col-6 center_text">
                <FlipCard
                    projects_items={this.props.projects_items}
                    limit={-1}
                />
            </Card>
        );
    }
}

Projects.propTypes = {
    projects_items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Projects;
