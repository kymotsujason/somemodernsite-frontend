import React, { Component } from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';

const override = css`
    margin: 0 auto;
`;

class FetchAPI extends Component {
	state = {
		data: [],
		loaded: false,
	};

	componentDidMount() {
		axios.get(this.props.endpoint)
		.then(response => {
			if (response.status !== 200) {
				return console.log("Something went wrong");
			}
			return response.data;
		})
		.then(data => this.setState({ data: data, loaded: true }));
	}
	
	render() {
		const { data, loaded } = this.state;
		return loaded ? 
		this.props.render(data) 
		: 
		<ClimbingBoxLoader 
			css={override}
			color={'#ffffff'}
			loading={!this.state.loaded}
		/>;
	}
}
 
export default FetchAPI;