import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Parser from "html-react-parser";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

class BlogCard extends Component {
    constructor(props) {
        super(props);

        this.renderModule = this.renderModule.bind(this);
        this.renderPage = this.renderPage.bind(this);
    }

    renderModule() {
        let url = "";
        if (this.props.blogData.meta) {
            let urlArr = this.props.blogData.meta.html_url.split("/");
            url = urlArr[urlArr.length - 2];
        } else {
            let title = this.props.blogData.title;
            url = title.toLowerCase().replace(/\s+/g, "-");
        }
        return (
            <div>
                <div
                    style={{
                        height: "400px",
                        overflow: "hidden"
                    }}
                >
                    <div style={{ fontSize: "2em" }}>
                        {this.props.blogData.title}
                    </div>
                    <div style={{ fontSize: "0.85em" }}>
                        by: Jason -{" "}
                        {dayjs(this.props.blogData.published_date).format(
                            "MMMM DD YYYY"
                        )}
                    </div>
                    {this.props.blogData.id < 6 ? (
                        <div
                            className="description"
                            style={{
                                whiteSpace: "pre-wrap"
                            }}
                        >
                            <p>{this.props.blogData.text}</p>
                        </div>
                    ) : (
                        <div className="description">
                            {Parser(this.props.blogData.text)}
                        </div>
                    )}
                </div>
                <div style={{ paddingTop: "2em" }}>
                    <NavLink to={"/blog/" + url}>
                        <span
                            style={{
                                textDecoration: "underline",
                                color: "white"
                            }}
                        >
                            Read more
                        </span>
                    </NavLink>
                </div>
            </div>
        );
    }

    renderPage() {
        return (
            <div>
                <div className="center_text push_down title">
                    {this.props.blogData.title}
                </div>
                <div
                    className="center_text"
                    style={{ fontSize: "0.85em", padding: "2em" }}
                >
                    by: Jason -{" "}
                    {dayjs(this.props.blogData.published_date).format(
                        "MMMM DD YYYY"
                    )}
                </div>
                {this.props.blogData.id < 6 ? (
                    <div
                        className="description"
                        style={{
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        <p>{this.props.blogData.text}</p>
                    </div>
                ) : (
                    <div className="description">
                        {Parser(this.props.blogData.text)}
                    </div>
                )}
            </div>
        );
    }

    render() {
        return this.props.module ? this.renderModule() : this.renderPage();
    }
}

BlogCard.propTypes = {
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    module: PropTypes.bool
};

export default BlogCard;
