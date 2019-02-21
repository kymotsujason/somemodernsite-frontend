import React, { Component } from "react";
import { PropTypes } from "prop-types";

class CardFront extends Component {
    render() {
        return (
            <div className="card-side side-front">
                <img
                    alt={this.props.title}
                    src={this.props.image}
                    width="100%"
                />
                <div className="side-front-content remove_space">
                    <h3 className="remove_space">{this.props.title}</h3>
                    <p className="remove_space">
                        <small>{this.props.date}</small>
                    </p>
                </div>
            </div>
        );
    }
}

CardFront.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string
};

export default CardFront;
