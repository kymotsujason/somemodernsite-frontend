import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Snake from "./Snake";

class GameOfLifeHome extends Component {
    constructor(props) {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    renderMenu() {
        let path = this.props.location.pathname;
        const splitArr = path.split("/");
        const cleanArr = splitArr.filter(el => {
            return el !== "";
        });
        if (cleanArr.length === 2) {
            return <Snake />;
        } else {
            this.props.history.replace("/404");
        }
    }

    render() {
        return this.renderMenu();
    }
}

export default withRouter(GameOfLifeHome);
