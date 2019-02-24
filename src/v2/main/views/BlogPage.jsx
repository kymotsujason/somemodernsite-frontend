import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import { getBlog } from "../../../redux/actions/index";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "../components/BlogCard";
import { NavLink } from "react-router-dom";

class BlogPage extends Component {
    componentDidMount() {
        if (this.props.blogData.length === 0 && !this.props.blogError) {
            this.props.getBlog();
        }
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
                    if (url === title.toLowerCase().replace(" ", "-")) {
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
                prevLink = "/blog/" + title.toLowerCase().replace(" ", "-");
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
                nextLink = "/blog/" + title.toLowerCase().replace(" ", "-");
            }
        }
        return (
            <div>
                <Panel>
                    {this.props.blogError ? (
                        <div className="center_content">
                            <span className="center_text">
                                <p className="title">
                                    Unable to fetch blog contents
                                </p>
                            </span>
                        </div>
                    ) : this.props.blogData.length > 0 && id !== -1 ? (
                        <div className="center_blog_content">
                            <BlogCard
                                module={false}
                                blogData={
                                    this.props.blogData[
                                        this.props.blogData.length - id.id
                                    ]
                                }
                            />
                        </div>
                    ) : (
                        <div className="center_content center_text">
                            <Loader type="Oval" color="#FFFFFF" />
                            Fetching...
                        </div>
                    )}
                    <div className="push_down">
                        {id.id - 1 > 0 ? (
                            <NavLink to={prevLink}>
                                <div
                                    className="p-grid-centered"
                                    style={{ float: "left", color: "white" }}
                                >
                                    <div className="p-col-2 p-col-align-center">
                                        <FontAwesomeIcon
                                            icon={faChevronLeft}
                                            size="3x"
                                        />
                                    </div>
                                    <div className="p-col-10">
                                        <div className="p-grid-centered">
                                            <div style={{ fontSize: "0.8em" }}>
                                                Prev
                                            </div>
                                            <div style={{ fontSize: "1.5em" }}>
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
                                    className="p-grid-centered"
                                    style={{ float: "right", color: "white" }}
                                >
                                    <div className="p-col-10">
                                        <div className="p-grid-centered">
                                            <div
                                                style={{
                                                    fontSize: "0.8em"
                                                }}
                                            >
                                                Next
                                            </div>
                                            <div style={{ fontSize: "1.5em" }}>
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
                )
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
    })
};

export default connect(
    mapStateToProps,
    { getBlog }
)(BlogPage);
