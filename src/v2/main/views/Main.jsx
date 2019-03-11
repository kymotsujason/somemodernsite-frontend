import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loadable from "react-loadable";
import PageLoader from "../../generic_components/views/PageLoader";
import "../assets/main.css";
import { PropTypes } from "prop-types";

const AsyncMainLayout = Loadable({
    loader: () => import("./MainLayout"),
    loading: PageLoader
});

const AsyncNotFound = Loadable({
    loader: () => import("../../generic_components/views/NotFound"),
    loading: PageLoader
});

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
                                <Route path="/" component={AsyncMainLayout} />
                                <Route component={AsyncNotFound} />
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
