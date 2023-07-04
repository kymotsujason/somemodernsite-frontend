import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import frontend_img from "../assets/img/home/frontend-min.png";
import frontend_img_1470 from "../assets/img/home/frontend-1470-min.png";
import frontend_img_992 from "../assets/img/home/frontend-992-min.png";
import frontend_img_768 from "../assets/img/home/frontend-768-min.png";
import backend_img from "../assets/img/home/backend-min.png";
import backend_img_1470 from "../assets/img/home/backend-1470-min.png";
import backend_img_992 from "../assets/img/home/backend-992-min.png";
import backend_img_768 from "../assets/img/home/backend-768-min.png";
import analytics_img from "../assets/img/home/analytics-min.png";
import analytics_img_1470 from "../assets/img/home/analytics-1470-min.png";
import analytics_img_992 from "../assets/img/home/analytics-992-min.png";
import analytics_img_768 from "../assets/img/home/analytics-768-min.png";
import { loadBlog } from "../../../redux/actions/index";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Picture } from "react-responsive-picture";
import { css } from "@emotion/css";
import StylizedButton from "../../generic_components/components/StylizedButton";
import ProjectsModule from "./../components/ProjectsModule";

class Home extends Component {
    render() {
        if (document.title !== "Jason Yue - Canadian Full-Stack Developer") {
            document.title = "Jason Yue - Canadian Full-Stack Developer";
        }

        return (
            <div>
                <Panel className="home">
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader shadow">
                                Here to turn ideas into algorithms
                            </p>
                            <p className="header shadow panel_bottom_space">
                                Let's build the future together
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">Web Development</p>
                            <p className="subtitle">
                                Real talk. You need websites that look amazing,
                                feel natural, and actually work. Well, that's
                                only the beginning. Feel free to read on and
                                learn more about me or send me an email.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <div className="center_text">
                            <p className="title">
                                I create algorithms to solve problems in a
                                simple, yet efficient manner.
                            </p>
                            <div
                                className="p-grid"
                                style={{ marginBottom: "2em" }}
                            >
                                <span
                                    className="p-col-4-auto"
                                    style={{
                                        padding: "2em",
                                    }}
                                >
                                    <Picture
                                        className={css`
                                            width: 285px;
                                            height: 150px;
                                        `}
                                        alt="Responsive Front-end"
                                        sources={[
                                            {
                                                srcSet: frontend_img_768,
                                                media: "(max-width: 768px)",
                                            },
                                            {
                                                srcSet: frontend_img_992,
                                                media: "(max-width: 992px)",
                                            },
                                            {
                                                srcSet: frontend_img_1470,
                                                media: "(max-width: 1470px)",
                                            },
                                            {
                                                srcSet: frontend_img,
                                            },
                                        ]}
                                    />
                                    <p
                                        className="subtitle"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Responsive front-end design
                                    </p>
                                    <p
                                        className="description"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        The average user expects near instant
                                        feedback upon UI interaction and an
                                        amazing theme and design. I create
                                        performance-oriented, front-end
                                        components with a focus on user
                                        satisfaction to guarantee user retention
                                        and growth.
                                    </p>
                                </span>
                                <span
                                    className="p-col-4-auto"
                                    style={{
                                        padding: "2em",
                                    }}
                                >
                                    <Picture
                                        className={css`
                                            width: 285px;
                                            height: 150px;
                                        `}
                                        alt="Back-end Optimization"
                                        sources={[
                                            {
                                                srcSet: backend_img_768,
                                                media: "(max-width: 768px)",
                                            },
                                            {
                                                srcSet: backend_img_992,
                                                media: "(max-width: 992px)",
                                            },
                                            {
                                                srcSet: backend_img_1470,
                                                media: "(max-width: 1470px)",
                                            },
                                            {
                                                srcSet: backend_img,
                                            },
                                        ]}
                                    />
                                    <p
                                        className="subtitle"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Back-end API optimization
                                    </p>
                                    <p
                                        className="description"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Every loop or operation decreases
                                        performance. I strive to provide the
                                        most efficient algorithm by checking
                                        runtime complexity at each corner.
                                    </p>
                                </span>
                                <span
                                    className="p-col-4-auto"
                                    style={{
                                        padding: "2em",
                                    }}
                                >
                                    <Picture
                                        className={css`
                                            width: 285px;
                                            height: 150px;
                                        `}
                                        alt="Analytics"
                                        sources={[
                                            {
                                                srcSet: analytics_img_768,
                                                media: "(max-width: 768px)",
                                            },
                                            {
                                                srcSet: analytics_img_992,
                                                media: "(max-width: 992px)",
                                            },
                                            {
                                                srcSet: analytics_img_1470,
                                                media: "(max-width: 1470px)",
                                            },
                                            {
                                                srcSet: analytics_img,
                                            },
                                        ]}
                                    />
                                    <p
                                        className="subtitle"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Analytics-focused results
                                    </p>
                                    <p
                                        className="description"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        An outstanding website is one that
                                        caters to its users. I gather data based
                                        on users and user interactions and
                                        navigations to gain insight on
                                        demographics and traffic priority.
                                    </p>
                                </span>
                            </div>
                            <StylizedButton
                                width="200px"
                                text="Learn about me"
                                url="/about"
                            />
                        </div>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <p
                            className="title center_text"
                            style={{ marginBottom: "1em" }}
                        >
                            My latest web projects
                        </p>
                        <div
                            className="center_content p-grid-centered"
                            style={{
                                marginBottom: "4em",
                            }}
                        >
                            <ProjectsModule limit={3} />
                        </div>
                        <div style={{ marginBottom: "5em" }}>
                            <StylizedButton
                                width="200px"
                                text="View more"
                                url="/projects"
                            />
                        </div>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                A developer's thoughts, stories, and ideas
                            </p>
                            <p className="subtitle">
                                As a full-stack developer with experience in
                                various technologies, here is where I post
                                monthly blogs on various events that have some
                                degree of relevance to my life and career.
                            </p>
                        </span>
                    </div>
                    <StylizedButton
                        width="200px"
                        text="Visit Blog"
                        url="https://blog.jasonyue.ca/"
                    />
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <div className="center_text">
                            <p
                                className="title"
                                style={{ marginBottom: "-2em" }}
                            >
                                Looking for an exceptional full-stack developer?
                            </p>
                            <p
                                className="header"
                                style={{ marginBottom: "0.45em" }}
                            >
                                Hire Jason today
                            </p>
                            <StylizedButton
                                width="200px"
                                text="Contact me"
                                url="/contact"
                            />
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loadingBlog: state.loadingBlog,
        blogData: state.blogData,
        blogError: state.blogError,
    };
}

Home.propTypes = {
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    blogError: PropTypes.bool,
    loadingBlog: PropTypes.bool,
    loadBlog: PropTypes.func,
};

export default connect(mapStateToProps, { loadBlog })(Home);
