import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Loadable from "react-loadable";
import PageLoader from "../../generic_components/views/PageLoader";

const AsyncTicTacToe = Loadable({
    loader: () => import("./projects/tictactoe/TicTacToeHome"),
    loading: PageLoader
});

const AsyncGameOfLife = Loadable({
    loader: () => import("./projects/gameoflife/GameOfLifeHome"),
    loading: PageLoader
});

const AsyncChat = Loadable({
    loader: () => import("./projects/chat/ChatHome"),
    loading: PageLoader
});

const AsyncNotFound = Loadable({
    loader: () => import("./../../generic_components/views/NotFound"),
    loading: PageLoader
});
class ProjectsRouter extends Component {
    constructor(props) {
        super(props);

        this.route = this.route.bind(this);
    }

    route() {
        let url = this.props.match.params.path;
        if (url === "tic-tac-toe") {
            return <AsyncTicTacToe />;
        } else if (url === "chat") {
            return <AsyncChat />;
        } else if (url === "game-of-life") {
            return <AsyncGameOfLife />;
        } else {
            return <AsyncNotFound />;
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
