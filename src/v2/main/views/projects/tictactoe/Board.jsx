import React, { Component } from "react";
import Square from "./Square";
import { PropTypes } from "prop-types";

class Board extends Component {
    constructor(props) {
        super(props);

        this.renderSquare = this.renderSquare.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    }

    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    renderBoard() {
        var board = [];
        for (var i = 0; i < 3; i++) {
            var row = [];
            for (var j = 0; j < 3; j++) {
                row.push(this.renderSquare(j + i * 3));
            }
            board.push(
                <div className="board_row2" key={i}>
                    {row}
                </div>
            );
        }
        return board;
    }

    render() {
        return <div>{this.renderBoard()}</div>;
    }
}

Board.propTypes = {
    squares: PropTypes.array,
    onClick: PropTypes.func
};

export default Board;
