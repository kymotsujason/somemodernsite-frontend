import React, { Component } from "react";
import Panel from "./../../../../generic_components/components/Panel";
import NotFound from "./../../../../generic_components/views/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";

class TicTacToeHome extends Component {
    componentDidMount() {
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        let url = window.location.href.split("/");
        return url.length <= 6 ? (
            <div className="privacy">
                <div className="push_down">
                    <FontAwesomeIcon
                        style={{ cursor: "pointer", marginTop: "2em" }}
                        icon={faArrowLeft}
                        size="2x"
                        onClick={this.goBack}
                    />
                    <span className="descriptionr"> Back</span>
                </div>
                <Panel>
                    <span
                        className="center_content work_exp"
                        style={{ marginBottom: "5em", marginTop: "-2em" }}
                    >
                        <p className="title push_down">Tic-tac-toe</p>
                        <p className="subtitle">Insert some description</p>
                    </span>
                </Panel>
            </div>
        ) : (
            <NotFound />
        );
    }
}

TicTacToeHome.propTypes = {
    history: PropTypes.object
};

export default TicTacToeHome;
