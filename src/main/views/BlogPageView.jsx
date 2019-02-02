import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import Parser from 'html-react-parser';
import axios from 'axios';
import CustomButton from '../../generic_components/components/CustomButton';
import {withRouter} from 'react-router-dom';
import {Growl} from 'primereact/growl';
import { css } from '@emotion/core';
import { ClimbingBoxLoader } from 'react-spinners';

const override = css`
    margin: 0 auto;
`;

class BlogPageView extends Component {
	constructor(props){
		super(props)

		this.state = {
			data: [],
			redirect: false,
			loaded: true,
		}

		this.renderPage = this.renderPage.bind(this);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.goHome = this.goHome.bind(this);
	}

	prevPage() {
		let path = this.props.location.pathname;
		const splitArr = path.split('/');
		let url = "/" + splitArr[1] + "/" + (parseInt(splitArr[2]) - 1) + "/";
		if ((parseInt(splitArr[2]) - 1) > 0) {
			this.setState({ loaded: false })
			let endpoint = "/api/blog/" + (parseInt(splitArr[2]) - 1);
			if((parseInt(splitArr[2]) - 1) >= 6) {
				endpoint = "/api/blog/v2/pages/" + (parseInt(splitArr[2]) - 1) + "/?type=blog2.BlogPage&fields=text,published_date";
			}
			axios.get(endpoint)
			.then(response => {
				if (response.status !== 200) {
					return console.log("Something went wrong");
				}
				return response.data;
			})
			.then(data => this.setState({ data: data, redirect: true, loaded: true }));
			this.props.history.push(url);
		}
		else {
			this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Previous page does not exist!'});
		}
	}

	nextPage() {
		let path = this.props.location.pathname;
		const splitArr = path.split('/');
		let url = "/" + splitArr[1] + "/" + (parseInt(splitArr[2]) + 1) + "/";
		if ((parseInt(splitArr[2]) + 1) < 7) {
			this.setState({ loaded: false })
			this.props.history.push(url);
			let endpoint = "/api/blog/" + (parseInt(splitArr[2]) + 1);
			if((parseInt(splitArr[2]) + 1) >= 6) {
				endpoint = "/api/blog/v2/pages/" + (parseInt(splitArr[2]) + 1) + "/?type=blog2.BlogPage&fields=text,published_date";
			}
			axios.get(endpoint)
			.then(response => {
				if (response.status !== 200) {
					return console.log("Something went wrong");
				}
				return response.data;
			})
			.then(data => this.setState({ data: data, redirect: true, loaded: true }));
		}
		else {
			this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Next page does not exist!'});
		}
	}

	goHome() {
		this.props.history.push("/");
	}

	renderPage() {
		var data =  this.props.data;
		if(this.state.redirect) {
			data = this.state.data;
		}
		var blog = [];
		blog.push(
			<div key={data.id} >
				<Card className="spacing">
					<div>
						<h3 className="remove_space spacing-half">{data.title}</h3>
						<h4 className="remove_space">by: Jason</h4>
						<small className="remove_space">
							{new Intl.DateTimeFormat('en-CA', { 
							year: 'numeric', 
							month: 'short', 
							day: '2-digit',
							}).format(new Date(data.published_date))}
						</small>
					</div>
					<div className="spacing-half linebreak" >{Parser(data.text)}</div>
				</Card>
			</div>
		)
		return blog;
	}

	render() { 
		if(this.state.loaded) {
			return (
				<div>
					{this.renderPage()}
					<br></br>
					<Growl ref={(el) => this.growl = el}></Growl>
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
		}
		else {
			return(
				<ClimbingBoxLoader 
					css={override}
					color={'#ffffff'}
					loading={this.props.anim}
				/>
			)
		}
	}
}
 
export default withRouter(BlogPageView);