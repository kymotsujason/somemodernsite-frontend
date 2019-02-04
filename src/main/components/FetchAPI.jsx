import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners';

class FetchAPI extends Component {
	state = {
		data: [],
		loaded: false,
		error: false,
	};

	componentDidMount() {
		if(this.props.endpoint2) {
			axios.all([
				axios.get(this.props.endpoint),
				axios.get(this.props.endpoint2)
			])
			.then(axios.spread((endRes, end2Res) => {
				if(endRes.status !== 200 || end2Res.status !== 200) {
					return console.log("Something went wrong");
				}
				let res = endRes.data.items;
				let res2 = end2Res.data;
				let data = [...res2, ...res];
				this.setState({ data: data, loaded: true });
			}))
			.catch((error) => {
				if(error) {
					this.setState({ error: true })
				}
			})
		}
		else {
			axios.get(this.props.endpoint)
			.then(response => {
				if (response.status !== 200) {
					return console.log("Something went wrong");
				}
				return response.data;
			})
			.catch((error) => {
				if(error) {
					this.setState({ error: true })
				}
			})
			.then(data => this.setState({ data: data, loaded: true }));
		}
	}
	
	render() {
		const { data, loaded } = this.state;
		if (this.state.error) {
			return(
				<Redirect to="/404" />
			)
		}
		else {
			return loaded ? 
		this.props.render(data) 
		: 
		<div className="center_text">
			<ClimbingBoxLoader 
				css={{margin: '0 auto'}}
				color={'#ffffff'}
				loading={this.props.anim}
			/>
			Fetching...
		</div>
		}
	}
}
 
export default FetchAPI;