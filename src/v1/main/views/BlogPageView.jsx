import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import Parser from "html-react-parser";
import axios from "axios";
import CustomButton from "../../generic_components/components/CustomButton";
import { withRouter } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { PropTypes } from "prop-types";

class BlogPageView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            redirect: false,
            loaded: true,
            error: false,
        };

        this.renderPage = this.renderPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.goHome = this.goHome.bind(this);
    }

    prevPage() {
        let path = this.props.location.pathname;
        const splitArr = path.split("/");
        let url = "/" + splitArr[1] + "/" + (parseInt(splitArr[2]) - 1) + "/";
        if (parseInt(splitArr[2]) - 1 > 0) {
            this.setState({ loaded: false });
            let endpoint = "/api/blog/" + (parseInt(splitArr[2]) - 1);
            if (parseInt(splitArr[2]) - 1 >= 6) {
                endpoint =
                    "/api/blog/v2/pages/" +
                    (parseInt(splitArr[2]) - 1) +
                    "/?type=blog2.BlogPage&fields=text,published_date";
            }
            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status !== 200) {
                        this.setState({
                            data: response.data,
                            redirect: true,
                            loaded: true,
                        });
                    }
                })
                .catch((error) => {
                    if (error) {
                        this.setState({ error: true });
                    }
                });
            this.props.history.push(url);
        }
    }

    nextPage() {
        let path = this.props.location.pathname;
        const splitArr = path.split("/");
        let url = "/" + splitArr[1] + "/" + (parseInt(splitArr[2]) + 1) + "/";
        if (parseInt(splitArr[2]) + 1 < 7) {
            this.setState({ loaded: false });
            this.props.history.push(url);
            let endpoint = "/api/blog/" + (parseInt(splitArr[2]) + 1);
            if (parseInt(splitArr[2]) + 1 >= 6) {
                endpoint =
                    "/api/blog/v2/pages/" +
                    (parseInt(splitArr[2]) + 1) +
                    "/?type=blog2.BlogPage&fields=text,published_date";
            }
            axios
                .get(endpoint)
                .then((response) => {
                    if (response.status === 200) {
                        this.setState({
                            data: response.data,
                            redirect: true,
                            loaded: true,
                        });
                    }
                })
                .catch((error) => {
                    if (error) {
                        this.setState({ error: true });
                    }
                });
        }
    }

    goHome() {
        this.props.history.push("/");
    }

    renderPage() {
        var data = this.props.data;
        if (this.state.redirect) {
            data = this.state.data;
        }
        var blog = [];
        blog.push(
            <div key={data.id}>
                <Card className="spacing">
                    <div>
                        <h3 className="remove_space spacing-half">
                            {data.title}
                        </h3>
                        <h4 className="remove_space">by: Jason</h4>
                        <small className="remove_space">
                            {new Intl.DateTimeFormat("en-CA", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                            }).format(new Date(data.published_date))}
                        </small>
                    </div>
                    <div className="spacing-half linebreak">
                        {Parser(data.text)}
                    </div>
                </Card>
            </div>
        );
        return blog;
    }

    render() {
        const { loaded } = this.state;
        if (this.state.error) {
            return <div className="center_text">Unable to fetch data</div>;
        } else {
            if (loaded) {
                return (
                    <div>
                        {this.renderPage()}
                        <br />
                        <div className="p-grid_nowrap p-justify-center">
                            <Card>
                                <CustomButton
                                    icon="arrow-left"
                                    onClick={() => this.prevPage()}
                                />
                                <CustomButton
                                    icon="home"
                                    onClick={() => this.goHome()}
                                />
                                <CustomButton
                                    icon="arrow-right"
                                    onClick={() => this.nextPage()}
                                />
                            </Card>
                        </div>
                    </div>
                );
            } else {
                return (
                    <ClimbingBoxLoader
                        css={{ margin: "0 auto" }}
                        color={"#ffffff"}
                        loading={this.props.anim}
                    />
                );
            }
        }
    }
}

BlogPageView.propTypes = {
    location: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    history: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    anim: PropTypes.bool,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default withRouter(BlogPageView);
