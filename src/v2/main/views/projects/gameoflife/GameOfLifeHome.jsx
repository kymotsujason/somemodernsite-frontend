import React, { Component } from "react";
import Panel from "./../../../../generic_components/components/Panel";
import NotFound from "./../../../../generic_components/views/NotFound";

class GameOfLifeHome extends Component {
    render() {
        let url = window.location.href.split("/");
        return url.length <= 6 ? (
            <div className="privacy">
                <Panel>
                    <span
                        className="center_content work_exp"
                        style={{ marginBottom: "5em" }}
                    >
                        <p className="title push_down">Game of Life</p>
                        <p className="subtitle">Insert some description</p>
                    </span>
                </Panel>
            </div>
        ) : (
            <NotFound />
        );
    }
}

export default GameOfLifeHome;
