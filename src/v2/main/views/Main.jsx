import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NotFound from "../../generic_components/views/NotFound";
import MainLayout from "./MainLayout";

import "../assets/main.css";
import { PropTypes } from "prop-types";

class Main extends Component {
    render() {
        return (
            <div className="main_content dark_background">
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={this.props.location.key}
                        timeout={{ enter: 100, exit: 100 }}
                        classNames={"fade"}
                    >
                        <section className="route-section">
                            <Switch location={this.props.location}>
                                <Route path="/" component={MainLayout} />
                                <Route component={NotFound} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

Main.propTypes = {
    location: PropTypes.object,
    key: PropTypes.string
};

export default withRouter(Main);
