import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/code.png";
import frontend_img from "../assets/frontend.png";
import backend_img from "../assets/backend.png";
import analytics_img from "../assets/analytics.png";
import { loadBlog } from "../../../redux/actions/index";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import BlogHandler from "../components/BlogHandler";
import StylizedButton from "../../generic_components/components/StylizedButton";

class Home extends Component {
    componentDidMount() {
        if (
            this.props.blogData.length === 0 &&
            !this.props.blogError &&
            !this.props.loadingBlog
        ) {
            this.props.loadBlog();
        }
    }

    render() {
        if (document.title !== "Canadian Full-Stack Developer") {
            document.title = "Canadian Full-Stack Developer";
        }

        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader">
                                Here to turn ideas into algorithms
                            </p>
                            <p
                                className="header"
                                style={{ marginBottom: "0.5em" }}
                            >
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
                                        padding: "2em"
                                    }}
                                >
                                    <img
                                        src={frontend_img}
                                        width="285px"
                                        height="150px"
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
                                        satisfaction to guarentee user retention
                                        and growth.
                                    </p>
                                </span>
                                <span
                                    className="p-col-4-auto"
                                    style={{
                                        padding: "2em"
                                    }}
                                >
                                    <img
                                        src={backend_img}
                                        width="285px"
                                        height="150px"
                                    />
                                    <p
                                        className="subtitle"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Optimized back-end code
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
                                        padding: "2em"
                                    }}
                                >
                                    <img
                                        src={analytics_img}
                                        width="285px"
                                        height="150px"
                                    />
                                    <p
                                        className="subtitle"
                                        style={{ marginBottom: "1px" }}
                                    >
                                        Analytics-focused Results
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
                        <span className="center_text">
                            <p
                                className="title"
                                style={{ marginBottom: "0px" }}
                            >
                                My latest Projects
                            </p>
                            <p
                                className="subtitle"
                                style={{ fontStyle: "italic" }}
                            >
                                Coming soon
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
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
                                Hire me today
                            </p>
                            <StylizedButton
                                width="200px"
                                text="Contact me"
                                url="/contact"
                            />
                        </div>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">My latest blog posts</p>
                        </span>
                    </div>
                    {this.props.blogError ? (
                        <div className="center_content">
                            <span className="center_text">
                                <p className="title">
                                    Unable to fetch blog contents
                                </p>
                            </span>
                        </div>
                    ) : this.props.blogData.length > 0 ? (
                        <div>
                            <div
                                className="center_content p-grid-centered"
                                style={{
                                    marginBottom: "4em"
                                }}
                            >
                                <BlogHandler
                                    limit={3}
                                    blogData={this.props.blogData}
                                />
                            </div>
                            <StylizedButton
                                width="200px"
                                text="View more"
                                url="/blog"
                            />
                        </div>
                    ) : (
                        <div className="center_text">
                            <Loader type="Oval" color="#FFFFFF" />
                            Fetching...
                        </div>
                    )}
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loadingBlog: state.loadingBlog,
        blogData: state.blogData,
        blogError: state.blogError
    };
}

Home.propTypes = {
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    blogError: PropTypes.bool,
    loadingBlog: PropTypes.bool,
    loadBlog: PropTypes.func
};

export default connect(
    mapStateToProps,
    { loadBlog }
)(Home);
