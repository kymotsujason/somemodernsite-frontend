import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import { getBlog } from "../../../redux/actions/index";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BlogModule from "../components/BlogModule";
import { NavLink } from "react-router-dom";

class BlogPage extends Component {
    componentDidMount() {
        if (this.props.blogData.length === 0 && !this.props.blogError) {
            this.props.getBlog();
        }
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        let id = -1;
        if (this.props.blogData.length > 0) {
            let url = this.props.match.params.title;
            id = this.props.blogData.find(element => {
                if (element.meta) {
                    let urlArr = element.meta.html_url.split("/");
                    if (url === urlArr[urlArr.length - 2]) {
                        return element.id;
                    }
                } else {
                    let title = element.title;
                    if (url === title.toLowerCase().replace(/\s+/g, "-")) {
                        return element.id;
                    }
                }
            });
        }
        let prevId = id.id - 1;
        let prevTitle = "";
        let prevLink = "";
        if (prevId > 0) {
            prevTitle = this.props.blogData[this.props.blogData.length - prevId]
                .title;
            if (this.props.blogData[this.props.blogData.length - prevId].meta) {
                let urlArr = this.props.blogData[
                    this.props.blogData.length - prevId
                ].meta.html_url.split("/");
                prevLink = "/blog/" + urlArr[urlArr.length - 2];
            } else {
                let title = this.props.blogData[
                    this.props.blogData.length - prevId
                ].title;
                prevLink = "/blog/" + title.toLowerCase().replace(/\s+/g, "-");
            }
        }
        let nextId = id.id + 1;
        let nextTitle = "";
        let nextLink = "";
        if (this.props.blogData.length - nextId >= 0) {
            nextTitle = this.props.blogData[this.props.blogData.length - nextId]
                .title;
            if (this.props.blogData[this.props.blogData.length - nextId].meta) {
                let urlArr = this.props.blogData[
                    this.props.blogData.length - nextId
                ].meta.html_url.split("/");
                nextLink = "/blog/" + urlArr[urlArr.length - 2];
            } else {
                let title = this.props.blogData[
                    this.props.blogData.length - nextId
                ].title;
                nextLink = "/blog/" + title.toLowerCase().replace(/\s+/g, "-");
            }
        }
        return (
            <div>
                <Panel className="main_content">
                    <div className="center_blog_content push_down">
                        <FontAwesomeIcon
                            style={{ cursor: "pointer", marginTop: "2em" }}
                            icon={faArrowLeft}
                            size="2x"
                            onClick={this.goBack}
                        />
                        <span className="description"> Back</span>
                    </div>
                    {this.props.blogError ? (
                        <div className="center_content">
                            <span className="center_text">
                                <p className="title">
                                    Unable to fetch blog contents
                                </p>
                            </span>
                        </div>
                    ) : this.props.blogData.length > 0 && id !== -1 ? (
                        <div
                            className="center_blog_content"
                            style={{ paddingBottom: "16em", marginTop: "-2em" }}
                        >
                            <BlogModule
                                module={false}
                                blogData={
                                    this.props.blogData[
                                        this.props.blogData.length - id.id
                                    ]
                                }
                            />
                        </div>
                    ) : (
                        <div className="center_content center_text push_down">
                            <Loader type="Oval" color="#FFFFFF" />
                            Fetching...
                        </div>
                    )}
                    <div className="center_content blog_nav">
                        {id.id - 1 > 0 ? (
                            <NavLink to={prevLink}>
                                <div
                                    className="p-grid"
                                    style={{ color: "white", float: "left" }}
                                >
                                    <div className="p-col-2 p-col-align-center">
                                        <FontAwesomeIcon
                                            icon={faChevronLeft}
                                            size="3x"
                                        />
                                    </div>
                                    <div className="p-col-10">
                                        <div className="p-grid">
                                            <div
                                                className="p-col-12"
                                                style={{
                                                    fontSize: "0.8em",
                                                    marginBottom: "-1.5em",
                                                    paddingLeft: "1em"
                                                }}
                                            >
                                                Prev
                                            </div>
                                            <div
                                                className="p-col-12"
                                                style={{ fontSize: "1.5em" }}
                                            >
                                                {prevTitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ) : null}
                        {this.props.blogData.length - id.id > 0 ? (
                            <NavLink to={nextLink}>
                                <div
                                    className="p-grid"
                                    style={{ color: "white", float: "right" }}
                                >
                                    <div className="p-col-10">
                                        <div className="p-grid">
                                            <div
                                                className="p-col-12"
                                                style={{
                                                    fontSize: "0.8em",
                                                    marginBottom: "-1.5em",
                                                    paddingLeft: "1em"
                                                }}
                                            >
                                                Next
                                            </div>
                                            <div
                                                className="p-col-12"
                                                style={{ fontSize: "1.5em" }}
                                            >
                                                {nextTitle}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-col-2 p-col-align-center">
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            size="3x"
                                        />
                                    </div>
                                </div>
                            </NavLink>
                        ) : null}
                    </div>
                </Panel>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        blogData: state.blogData,
        blogError: state.blogError
    };
}

BlogPage.propTypes = {
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    blogError: PropTypes.bool,
    getBlog: PropTypes.func,
    match: PropTypes.shape({
        params: PropTypes.shape({
            title: PropTypes.string
        })
    }),
    history: PropTypes.object
};

export default connect(
    mapStateToProps,
    { getBlog }
)(BlogPage);
