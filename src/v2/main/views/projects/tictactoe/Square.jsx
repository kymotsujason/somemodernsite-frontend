import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Square extends Component {
    render() {
        return (
            <button className="square2" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
};

export default Square;
