import React, { Component } from "react";
import BlogModule from "./BlogModule";
import { PropTypes } from "prop-types";

class BlogHandler extends Component {
    constructor(props) {
        super(props);

        this.generateBlog = this.generateBlog.bind(this);
    }

    generateBlog() {
        let blogData = this.props.blogData;
        let cardMenu = [];
        if (this.props.limit > 0) {
            blogData = blogData.slice(0, this.props.limit);
        }
        Object.keys(blogData).map(index => {
            cardMenu.push(
                <div
                    key={index}
                    className="p-col-4-auto"
                    style={{
                        padding: "2em",
                        borderColor: "gray",
                        borderWidth: "1px",
                        borderStyle: "solid"
                    }}
                >
                    <BlogModule module={true} blogData={blogData[index]} />
                </div>
            );
        });

        return cardMenu;
    }

    render() {
        return this.generateBlog();
    }
}

BlogHandler.propTypes = {
    limit: PropTypes.number,
    blogData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default BlogHandler;
