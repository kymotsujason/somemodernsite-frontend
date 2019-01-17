import React, { Component } from 'react';
import axios from 'axios';

class FetchAPI extends Component {
	state = {
		data: [],
		loaded: false,
		placeholder: "Loading..."
	};

	componentDidMount() {
		axios.get(this.props.endpoint)
		.then(response => {
			if (response.status !== 200) {
				return this.setState({ placeholder: "Something went wrong" });
			}
			return response.data;
		})
		.then(data => this.setState({ data: data, loaded: true }));
	}
	
	render() {
		const { data, loaded, placeholder } = this.state;
		return loaded ? this.props.render(data) : <p>{placeholder}</p>;
	}
}
 
export default FetchAPI;