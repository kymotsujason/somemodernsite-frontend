import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loadable from "react-loadable";
import PageLoader from "../../generic_components/views/PageLoader";
import { PropTypes } from "prop-types";
import "../assets/main.css";

import {
    home_url,
    projects_url,
    about_url,
    resume_url,
    blog_url,
    contact_url
} from "../../assets/static_routes";

import Header from "../../generic_components/views/Header";
import Footer from "../../generic_components/views/Footer";
import Cookiebar from "../../../v1/generic_components/components/Cookiebar";

const AsyncHome = Loadable({
    loader: () => import("./Home"),
    loading: PageLoader
});

const AsyncProjects = Loadable({
    loader: () => import("./Projects"),
    loading: PageLoader
});

const AsyncProjectsRouter = Loadable({
    loader: () => import("./ProjectsRouter"),
    loading: PageLoader
});

const AsyncAbout = Loadable({
    loader: () => import("./About"),
    loading: PageLoader
});

const AsyncResume = Loadable({
    loader: () => import("./Resume"),
    loading: PageLoader
});

const AsyncBlog = Loadable({
    loader: () => import("./Blog"),
    loading: PageLoader
});

const AsyncBlogPage = Loadable({
    loader: () => import("./BlogPage"),
    loading: PageLoader
});

const AsyncContact = Loadable({
    loader: () => import("./Contact"),
    loading: PageLoader
});

const AsyncPrivacy = Loadable({
    loader: () => import("./Privacy"),
    loading: PageLoader
});

const AsyncNotFound = Loadable({
    loader: () => import("../../generic_components/views/NotFound"),
    loading: PageLoader
});

class MainLayout extends Component {
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
                            <Header />
                            <Switch>
                                <Route
                                    exact
                                    path={home_url}
                                    component={AsyncHome}
                                />
                                <Route
                                    exact
                                    path={projects_url}
                                    component={AsyncProjects}
                                />
                                <Route
                                    path={projects_url + "/:path"}
                                    component={AsyncProjectsRouter}
                                />
                                <Route
                                    exact
                                    path={about_url}
                                    component={AsyncAbout}
                                />
                                <Route
                                    exact
                                    path={resume_url}
                                    component={AsyncResume}
                                />
                                <Route
                                    exact
                                    path={blog_url}
                                    component={AsyncBlog}
                                />
                                <Route
                                    path={blog_url + "/:title"}
                                    component={AsyncBlogPage}
                                />
                                <Route
                                    exact
                                    path={contact_url}
                                    component={AsyncContact}
                                />
                                <Route
                                    path={"/privacy"}
                                    component={AsyncPrivacy}
                                />
                                <Route component={AsyncNotFound} />
                            </Switch>
                            <Cookiebar />
                            <Footer />
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

MainLayout.propTypes = {
    location: PropTypes.object,
    key: PropTypes.string
};

export default withRouter(MainLayout);
