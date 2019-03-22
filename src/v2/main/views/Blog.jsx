import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import { loadBlog } from "../../../redux/actions/index";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import BlogHandler from "../components/BlogHandler";

class Blog extends Component {
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
        if (document.title !== "Thoughts and Insights") {
            document.title = "Thoughts and Insights";
        }

        return (
            <div>
                <Panel className="main_content">
                    <div
                        className="center_content"
                        style={{ marginBottom: "5em" }}
                    >
                        <span className="center_text">
                            <p className="title push_down">
                                Here are my thoughts
                            </p>
                            <p className="subtitle">
                                As a full-stack developer with experience in
                                various technologies, here is where I provide
                                insight into my thinking
                            </p>
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
                        <div
                            className="center_content"
                            style={{ marginBottom: "2em" }}
                        >
                            <div className="p-grid">
                                <BlogHandler blogData={this.props.blogData} />
                            </div>
                        </div>
                    ) : (
                        <div className="center_content center_text">
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

Blog.propTypes = {
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    blogError: PropTypes.bool,
    loadingBlog: PropTypes.bool,
    loadBlog: PropTypes.func
};

export default connect(
    mapStateToProps,
    { loadBlog }
)(Blog);
