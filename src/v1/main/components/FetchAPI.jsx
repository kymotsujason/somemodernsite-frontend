import React, { Component } from "react";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import { PropTypes } from "prop-types";

class FetchAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loaded: false,
            error: false
        };
    }

    componentDidMount() {
        if (this.props.endpoint2) {
            axios
                .all([
                    axios.get(this.props.endpoint),
                    axios.get(this.props.endpoint2)
                ])
                .then(
                    axios.spread((endRes, end2Res) => {
                        if (endRes.status === 200 && end2Res.status === 200) {
                            let res = endRes.data.items;
                            let res2 = end2Res.data;
                            let data = [...res2, ...res];
                            this.setState({ data: data, loaded: true });
                        }
                    })
                )
                .catch(error => {
                    if (error) {
                        this.setState({ error: true });
                    }
                });
        } else {
            axios
                .get(this.props.endpoint)
                .then(response => {
                    if (response.status === 200) {
                        this.setState({ data: response.data, loaded: true });
                    }
                })
                .catch(error => {
                    if (error) {
                        this.setState({ error: true });
                    }
                });
        }
    }

    render() {
        const { data, loaded } = this.state;
        if (this.state.error) {
            return <div className="center_text">Unable to fetch data</div>;
        } else {
            if (loaded) {
                return this.props.render(data);
            } else {
                return (
                    <div className="center_text">
                        <ClimbingBoxLoader
                            css={{ margin: "0 auto" }}
                            color={"#ffffff"}
                            loading={this.props.anim}
                        />
                        Fetching...
                    </div>
                );
            }
        }
    }
}

FetchAPI.propTypes = {
    endpoint: PropTypes.string,
    endpoint2: PropTypes.string,
    anim: PropTypes.bool,
    render: PropTypes.func
};

export default FetchAPI;
