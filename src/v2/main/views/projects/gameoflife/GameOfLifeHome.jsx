import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Panel from "./../../../../generic_components/components/Panel";
import NotFound from "./../../../../generic_components/views/NotFound";
import Game from "./Game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class GameOfLifeHome extends Component {
    constructor(props) {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    renderMenu() {
        return (
            <div className="center_text">
                <Game />
            </div>
        );
    }

    render() {
        let url = window.location.href.split("/");
        return url.length <= 6 ? (
            <div>
                <Panel>
                    <div className="center_content push_down">
                        <FontAwesomeIcon
                            style={{
                                cursor: "pointer",
                                marginTop: "2em",
                                marginLeft: "-1em"
                            }}
                            icon={faArrowLeft}
                            size="2x"
                            onClick={this.goBack}
                        />
                        <span className="description"> Back</span>
                    </div>
                    <div
                        className="center_content "
                        style={{ marginBottom: "2em" }}
                    >
                        <div
                            style={{
                                marginBottom: "1em",
                                paddingLeft: "1em"
                            }}
                        >
                            <span className="work_exp">
                                <p className="title">Conway's Game of Life</p>
                                <p className="subtitle">
                                    This is an old, but popular evolution game
                                    called Conway's Game of Life. The idea is
                                    that a universe is created with cells that
                                    can either be alive or dead, which is
                                    determined based on 4 rules. The universe is
                                    represented by a 2D grid in this case. The
                                    rules are:
                                    <ol>
                                        <li>
                                            Any live cell with fewer than two
                                            live neighbours dies, as if by
                                            underpopulation
                                        </li>
                                        <li>
                                            Any live cell with two or three live
                                            neighbours lives on to the next
                                            generation
                                        </li>
                                        <li>
                                            Any live cell with more than three
                                            live neighbours dies, as if by
                                            overpopulation
                                        </li>
                                        <li>
                                            Any dead cell with exactly three
                                            live neighbours becomes a live cell,
                                            as if by reproduction
                                        </li>
                                    </ol>
                                    I followed a tutorial to create this game,
                                    but expanded it by improving the
                                    responsiveness for smaller screens.
                                </p>
                            </span>
                        </div>
                        {this.renderMenu()}
                    </div>
                </Panel>
            </div>
        ) : (
            <NotFound />
        );
    }
}

GameOfLifeHome.propTypes = {
    history: PropTypes.object
};

export default withRouter(GameOfLifeHome);
