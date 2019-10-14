import React from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { PropTypes } from "prop-types";
import "../assets/main.css";
import {
    home_url,
    projects_url,
    about_url,
    resume_url,
    //blog_url,
    contact_url
} from "../../assets/static_routes";

import Header from "../../generic_components/views/Header";
import Footer from "../../generic_components/views/Footer";
import Home from "./Home";
import Projects from "./Projects";
import ProjectRouter from "./ProjectsRouter";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Privacy from "./Privacy";

// const AsyncBlog = Loadable({
//     loader: () => import("./Blog"),
//     loading: PageLoader
// });

// const AsyncBlogPage = Loadable({
//     loader: () => import("./BlogPage"),
//     loading: PageLoader
// });

const routes = [
    { path: home_url, name: "Home", Component: Home },
    { path: about_url, name: "About", Component: About },
    { path: contact_url, name: "Contact", Component: Contact },
    { path: "/privacy", name: "Privacy", Component: Privacy },
    { path: resume_url, name: "Resume", Component: Resume },
    { path: projects_url, name: "Projects", Component: Projects },
    {
        path: projects_url + "/:path",
        name: "ProjectRouter",
        Component: ProjectRouter
    }
];

const MainLayout = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <div className="main_content dark_background container">
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="page"
                                    unmountOnExit
                                >
                                    <div className="page">
                                        <Component />

                                        <Footer />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </div>
            </>
        </BrowserRouter>
    );
};

MainLayout.propTypes = {
    location: PropTypes.object,
    key: PropTypes.string
};

export default withRouter(MainLayout);
