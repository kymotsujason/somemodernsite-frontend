import React, { Component } from "react";

import Header from "../../generic_components/views/Header";
import Footer from "../../generic_components/views/Footer";
import Cookiebar from "../../generic_components/components/Cookiebar";

import { Route, Switch } from "react-router-dom";
import NotFound from "../../generic_components/views/NotFound";
import ProjectsAPI from "./ProjectsAPI";

import {
    home_url,
    about_url,
    projects_url,
    blog_url
} from "../../assets/static_routes";

import Home from "./Home";
import About from "./About";
import ProjectsLayout from "./ProjectsLayout";
import BlogLayout from "./BlogLayout";
import BlogAPI from "./BlogAPI";
import Privacy from "./Privacy";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="main_content">
                    <Switch>
                        <Route exact path={home_url} component={Home} />
                        <Route exact path={about_url} component={About} />
                        <Route
                            exact
                            path={projects_url}
                            component={ProjectsLayout}
                        />
                        <Route
                            path={projects_url + "/:path"}
                            component={ProjectsAPI}
                        />
                        <Route exact path={blog_url} component={BlogLayout} />
                        <Route
                            path={blog_url + "/:number"}
                            component={BlogAPI}
                        />
                        <Route path={"/privacy"} component={Privacy} />
                        <Route component={NotFound} />
                    </Switch>
                </div>

                <Cookiebar />

                <Footer />
            </div>
        );
    }
}

export default MainLayout;
