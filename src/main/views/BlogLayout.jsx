import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import Typist from "react-typist";
import FetchAPI from "../components/FetchAPI";
import BlogView from "../components/BlogView";

class BlogLayout extends Component {
    render() {
        return (
            <div className="spacing main_container">
                <Card className="g-col-6 center_text">
                    <Typist
                        className="typist"
                        avgTypingSpeed={50}
                        startDelay={300}
                    >
                        <span>Blog</span>
                    </Typist>
                </Card>
                <br />
                <Card className="g-col-6">
                    <FetchAPI
                        endpoint={
                            "/api/blog/v2/pages/?type=blog2.BlogPage&fields=text,published_date"
                        }
                        endpoint2={"/api/blog"}
                        anim={true}
                        render={data => <BlogView data={data} />}
                    />
                </Card>
            </div>
        );
    }
}

export default BlogLayout;
