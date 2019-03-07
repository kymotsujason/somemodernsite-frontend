import React, { Component } from "react";
import Cell from "./Cell";
import "./css/game.css";
import StylizedButton from "./../../../../generic_components/components/StylizedButton";

const CELL_SIZE = 20;

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cells: [],
            height: 0,
            width: 0,
            rows: 0,
            cols: 0,
            board: [],
            interval: 100,
            isRunning: false
        };

        this.makeEmptyBoard = this.makeEmptyBoard.bind(this);
        this.makeCells = this.makeCells.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getElementOffset = this.getElementOffset.bind(this);
        this.runGame = this.runGame.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.handleIntervalChange = this.handleIntervalChange.bind(this);
        this.runIteration = this.runIteration.bind(this);
        this.calculateNeighbors = this.calculateNeighbors.bind(this);
        this.handleRandom = this.handleRandom.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.checkWindowDimensions = this.checkWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.checkWindowDimensions();
        window.addEventListener("resize", this.checkWindowDimensions);
        window.addEventListener("scroll", this.checkWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.checkWindowDimensions);
        window.removeEventListener("scroll", this.checkWindowDimensions);
    }

    checkWindowDimensions() {
        let width = document.getElementById("game2").clientWidth;
        width =
            width -
            parseInt(
                width
                    .toString()
                    .split("")
                    .pop()
            );
        if (width % 20 !== 0) {
            width = width - 10;
        }
        let height = Math.floor(window.innerHeight / 1.4);
        height =
            height -
            parseInt(
                height
                    .toString()
                    .split("")
                    .pop()
            );
        if (height % 20 !== 0) {
            height = height - 10;
        }
        if (this.state.height !== height || this.state.width !== width) {
            this.setState({
                height: height + 1,
                width: width + 1,
                rows: height / CELL_SIZE,
                cols: width / CELL_SIZE
            });
        }
        if (!(this.state.board.length > 0)) {
            this.setState({
                board: this.makeEmptyBoard(height / CELL_SIZE)
            });
        }
    }

    runGame() {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame() {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    handleIntervalChange(e) {
        this.setState({ interval: e.target.value });
    }

    handleClear() {
        this.setState({
            cells: [],
            board: this.makeEmptyBoard(this.state.rows)
        });
    }

    handleRandom() {
        let board = this.state.board;
        for (let y = 0; y < this.state.rows; y++) {
            for (let x = 0; x < this.state.cols; x++) {
                board[y][x] = Math.random() >= 0.5;
            }
        }
        this.setState({ board: board, cells: this.makeCells() });
    }

    runIteration() {
        let newBoard = this.makeEmptyBoard(this.state.rows);
        for (let y = 0; y < this.state.rows; y++) {
            for (let x = 0; x < this.state.cols; x++) {
                let neighbors = this.calculateNeighbors(this.state.board, x, y);
                if (this.state.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.state.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }
        this.setState({
            cells: this.makeCells(),
            board: newBoard
        });
        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
            [1, 1],
            [1, 0],
            [1, -1],
            [0, -1]
        ];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];
            if (
                x1 >= 0 &&
                x1 < this.state.cols &&
                y1 >= 0 &&
                y1 < this.state.rows &&
                board[y1][x1]
            ) {
                neighbors++;
            }
        }

        return neighbors;
    }

    makeEmptyBoard(rows) {
        let board = [];
        for (let y = 0; y < rows; y++) {
            board[y] = [];
        }
        return board;
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.state.rows; y++) {
            for (let x = 0; x < this.state.cols; x++) {
                if (this.state.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        return {
            x:
                rect.left +
                window.pageXOffset -
                document.documentElement.scrollLeft,
            y:
                rect.top +
                window.pageYOffset -
                document.documentElement.scrollTop
        };
    }

    handleClick(event) {
        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
        if (x >= 0 && x <= this.state.cols && y >= 0 && y <= this.state.rows) {
            let board = this.state.board;
            board[y][x] = !board[y][x];
            this.setState({
                board: board
            });
        }
        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells } = this.state;
        return (
            <div id="game2">
                <div
                    className="board2"
                    style={{
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                        width: this.state.width,
                        height: this.state.height
                    }}
                    onClick={this.handleClick}
                    ref={n => {
                        this.boardRef = n;
                    }}
                >
                    {cells.map(cell => (
                        <Cell
                            x={cell.x}
                            y={cell.y}
                            CELL_SIZE={CELL_SIZE}
                            key={`${cell.x},${cell.y}`}
                        />
                    ))}
                </div>
                <br />
                <div className="p-grid p-justify-center">
                    <div style={{ paddingTop: "2em" }}>
                        <span>Update every</span>
                        <input
                            value={this.state.interval}
                            onChange={this.handleIntervalChange}
                        />
                        <span>msec </span>
                    </div>
                    {this.state.isRunning ? (
                        <div
                            onClick={this.stopGame}
                            style={{ paddingTop: "1em" }}
                        >
                            <StylizedButton text="Stop" width="250px" />
                        </div>
                    ) : (
                        <div
                            onClick={this.runGame}
                            style={{ paddingTop: "1em" }}
                        >
                            <StylizedButton text="Run" width="250px" />
                        </div>
                    )}
                    <div
                        onClick={this.handleRandom}
                        style={{ paddingTop: "1em" }}
                    >
                        <StylizedButton text="Random" width="250px" />
                    </div>
                    <div
                        onClick={this.handleClear}
                        style={{ paddingTop: "1em" }}
                    >
                        <StylizedButton text="Clear" width="250px" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
