import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

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
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import Blog from "./Blog";
import BlogPage from "./BlogPage";
import Contact from "./Contact";
import Privacy from "./Privacy";
import NotFound from "../../generic_components/views/NotFound";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={home_url} component={Home} />
                    <Route exact path={projects_url} component={Projects} />
                    {/* <Route
                        path={projects_url + "/:path"}
                        component={ProjectsAPI}
                    /> */}
                    <Route exact path={about_url} component={About} />
                    <Route exact path={resume_url} component={Resume} />
                    <Route exact path={blog_url} component={Blog} />
                    <Route path={blog_url + "/:title"} component={BlogPage} />
                    <Route exact path={contact_url} component={Contact} />
                    <Route path={"/privacy"} component={Privacy} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default MainLayout;
