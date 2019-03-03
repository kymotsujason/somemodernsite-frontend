import React, { Component } from "react";
import { PropTypes } from "prop-types";
import TicTacToeHome from "./projects/tictactoe/TicTacToeHome";
import GameOfLifeHome from "./projects/gameoflife/GameOfLifeHome";
import ChatHome from "./projects/chat/ChatHome";
import NotFound from "./../../generic_components/views/NotFound";

class ProjectsRouter extends Component {
    constructor(props) {
        super(props);

        this.route = this.route.bind(this);
    }

    route() {
        let url = this.props.match.params.path;
        if (url === "tic-tac-toe") {
            return <TicTacToeHome />;
        } else if (url === "chat") {
            return <ChatHome />;
        } else if (url === "game-of-life") {
            return <GameOfLifeHome />;
        } else {
            return <NotFound />;
        }
    }

    render() {
        return this.route();
    }
}

ProjectsRouter.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            path: PropTypes.string
        })
    })
};

export default ProjectsRouter;
