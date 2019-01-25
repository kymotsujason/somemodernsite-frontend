import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CardMini from '../../generic_components//components/CardMini';

class BlogView extends Component {
	state = {  }

	constructor(props){
		super(props)

		this.state = {
			height: 0,
		}

		this.renderPage = this.renderPage.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
  		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		let height = document.getElementById('card').clientWidth;
		if (height > 230) {
			height = 230 + (0.6 * (height - 230));
		}
		this.setState({ 
			height: height,
		});
	}

	renderPage() {
		var data = this.props.data;
		var limit = this.props.limit;
		var blog = [];
		var size = Object.keys(data).length - 1;
		if (limit !== undefined) {
			data = data.slice(size - limit + 1, size + 1);
			size = Object.keys(data).length - 1;
		}
		Object.keys(data).map((index) => (
			blog.push(
				<div id='card' key={index} className="g-col-flex" style={{height: this.state.height, overflow: 'hidden'}}>
					<NavLink to={"/blog/" + data[size - index].id}>
						<CardMini className="spacing">
							<div>
								<h2 className="remove_space spacing-half">{data[size - index].title}</h2>
								<h4 className="remove_space">by: Jason</h4>
								<small className="remove_space">
									{new Intl.DateTimeFormat('en-CA', {
									year: 'numeric', 
									month: 'short', 
									day: '2-digit',
									}).format(new Date(data[size - index].published_date))}
								</small>
							</div>
							<div className="spacing-half linebreak">{data[size - index].text}</div>
							<br></br>
							<span className="readmore">Read more</span>
						</CardMini>
					</NavLink>
				</div>
			)
		))

		return blog;
	}

	render() { 
		return (  
			<div className="p-grid p-justify-center">
				{this.renderPage()}
			</div>
		);
	}
}
 
export default BlogView;