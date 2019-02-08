import React, { Component } from "react";

import NotFound from "../../generic_components/views/NotFound";
import { projects_items } from "../assets/projects_preview";
import ChatHome from "./projects/chat/ChatHome";
import TicTacToeHome from "./projects/tic-tac-toe/TicTacToeHome";
import GameOfLifeHome from "./projects/game-of-life/GameOfLife";

class ProjectsAPI extends Component {
    constructor(props) {
        super(props);

        this.verifyLink = this.verifyLink.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
    }

    isEmpty(data) {
        return data === null || data === undefined || data === "";
    }

    verifyLink() {
        var path = this.props.match.params.path.toLowerCase();
        if (!this.isEmpty(projects_items[path])) {
            if (path === "tic-tac-toe") {
                return <TicTacToeHome />;
            } else if (path === "chat") {
                return <ChatHome />;
            } else if (path === "game-of-life") {
                return <GameOfLifeHome />;
            } else {
                return <NotFound />;
            }
        } else {
            return <NotFound />;
        }
    }

    render() {
        return this.verifyLink();
    }
}

export default ProjectsAPI;
