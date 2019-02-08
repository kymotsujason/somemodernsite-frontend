import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

import FlipCard from "./FlipCard";
import { PropTypes } from "prop-types";

class FeaturedProjects extends Component {
    render() {
        return (
            <Card className="g-col-6 center_text">
                <h2>Featured Projects</h2>
                <FlipCard
                    projects_items={this.props.projects_items}
                    limit={3}
                />
                <br />
                <NavLink to="/projects">
                    <Button
                        label="View more"
                        className="p-button-raised p-button-rounded"
                    />
                </NavLink>
            </Card>
        );
    }
}

FeaturedProjects.propTypes = {
    projects_items: PropTypes.object
};

export default FeaturedProjects;
