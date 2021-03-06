import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Cell extends Component {
    render() {
        const { x, y, CELL_SIZE } = this.props;
        return (
            <div
                className="cell2"
                style={{
                    left: `${CELL_SIZE * x + 1}px`,
                    top: `${CELL_SIZE * y + 1}px`,
                    width: `${CELL_SIZE - 1}px`,
                    height: `${CELL_SIZE - 1}px`
                }}
            />
        );
    }
}

Cell.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    CELL_SIZE: PropTypes.number
};

export default Cell;
