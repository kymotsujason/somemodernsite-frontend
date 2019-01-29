import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Parser from 'html-react-parser';
import CardMini from '../../generic_components//components/CardMini';

class BlogView extends Component {
	state = {  }

	constructor(props){
		super(props)

		this.state = {
			height: 0,
			actualHeight: 0,
		}

		this.resizeId = null;

		this.checkWindowDimensions = this.checkWindowDimensions.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.eventHandler = this.eventHandler.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.eventHandler);
		window.addEventListener('scroll', this.eventHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.eventHandler);
		window.removeEventListener('scroll', this.eventHandler);
	}

	eventHandler() {
		clearTimeout(this.resizeId);
		this.resizeId = setTimeout(this.checkWindowDimensions, 100);
	}

	checkWindowDimensions() {
		let height = document.getElementById('blog2').clientWidth;
		if (this.state.height !== height || this.state.height !== height - 30) {
			this.updateWindowDimensions();
		}
	}

	updateWindowDimensions() {
		let height = document.getElementById('blog2').clientWidth - 30;
		this.setState({ 
			height: height,
			actualHeight: height / 2,
		});
	}

	renderPage() {
		var data = this.props.data.items || this.props.data;
		var limit = this.props.limit;
		var blog = [];
		var size = Object.keys(data).length - 1;
		if (limit !== undefined) {
			data = data.slice(size - limit + 1, size + 1);
			size = Object.keys(data).length - 1;
		}
		Object.keys(data).map((index) => (
			blog.push(
				<div id='blog2' key={index} className="g-col-flex">
					<NavLink to={"/blog/" + (data[size - index].id)}>
						<CardMini className="spacing" style={{height: this.state.height, overflow: 'hidden'}}>
							<div className="remove_space spacing-half" style={{fontSize: (this.state.height / 17), fontWeight: 'bold'}}>{data[size - index].title}</div>
							<div className="remove_space" style={{fontSize: (this.state.height / 25)}}>
								by: Jason - {new Intl.DateTimeFormat('en-CA', {
								year: 'numeric', 
								month: 'short', 
								day: '2-digit',
								}).format(new Date(data[size - index].published_date))}
							</div>
							<div className="spacing-half linebreak" style={{height: this.state.actualHeight, overflow: 'auto', fontSize: (this.state.height / 22)}} >{Parser(data[size - index].text)}</div>
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