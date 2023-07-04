import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import Panel from "../../generic_components/components/Panel";
import LinearProgress from "@mui/material/LinearProgress";
import NotFound from "./../../generic_components/views/NotFound";
import GameOfLife from "./projects/gameoflife/GameOfLifeHome";

// const AsyncTicTacToe = Loadable({
//     loader: () => import("./projects/tictactoe/TicTacToeHome"),
//     loading: PageLoader
// });

// const AsyncChat = Loadable({
//     loader: () => import("./projects/chat/ChatHome"),
//     loading: PageLoader
// });

class ProjectsRouter extends Component {
    constructor(props) {
        super(props);

        this.route = this.route.bind(this);
    }

    route() {
        if (this.props.match === null) {
            return (
                <div
                    style={{
                        flexGrow: 1,
                        position: "absolute",
                        width: "100%",
                        top: 0,
                    }}
                >
                    <LinearProgress />
                </div>
            );
        } else {
            let url = this.props.match.params.path;
            if (url === "tic-tac-toe") {
                //return <AsyncTicTacToe />;
                return (
                    <div>
                        <Panel>
                            <div className="center_content center_text">
                                <p
                                    className="header"
                                    style={{ marginBottom: "0.5em" }}
                                >
                                    Under migration
                                </p>
                            </div>
                        </Panel>
                    </div>
                );
            } else if (url === "chat") {
                //return <AsyncChat />;
                return (
                    <div>
                        <Panel>
                            <div className="center_content center_text">
                                <p
                                    className="header"
                                    style={{ marginBottom: "0.5em" }}
                                >
                                    Under migration
                                </p>
                            </div>
                        </Panel>
                    </div>
                );
            } else if (url === "game-of-life") {
                return <GameOfLife />;
            } else {
                return <NotFound />;
            }
        }
    }

    render() {
        return this.route();
    }
}

ProjectsRouter.propTypes = {
    match: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default withRouter(ProjectsRouter);
