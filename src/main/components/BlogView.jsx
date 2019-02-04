import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Parser from 'html-react-parser';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import Card from '../../generic_components//components/Card';
import CardMini from '../../generic_components//components/CardMini';

class BlogView extends Component {
	constructor(props){
		super(props)

		this.state = {
			height: 0,
			actualHeight: 0,
			visible: false,
			data: [],
		}

		this.resizeId = null;

		this.checkWindowDimensions = this.checkWindowDimensions.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.eventHandler = this.eventHandler.bind(this);
		this.handleClick = this.handleClick.bind(this);
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
		let height = document.getElementById('blog').clientWidth;
		if (this.state.height !== height || this.state.height !== height - 30) {
			this.updateWindowDimensions();
		}
	}

	updateWindowDimensions() {
		let height = document.getElementById('blog').clientWidth - 30;
		this.setState({ 
			height: height,
			actualHeight: height / 2,
		});
	}

	handleClick(data) {
		this.setState({
			visible: true,
			data: data,
		})
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
				<div 
					id='blog' 
					key={data[size - index].id} 
					className="g-col-flex"
				 	onClick={() => {
						this.handleClick(data[size - index])
					}}
				>
					<CardMini className="spacing" style={{height: this.state.height, overflow: 'hidden'}}>
						<div className="remove_space spacing-half" style={{fontSize: (this.state.height / 17), fontWeight: 'bold'}}>{data[size - index].title}</div>
						<div className="remove_space" style={{fontSize: (this.state.height / 25)}}>
							by: Jason - {new Intl.DateTimeFormat('en-CA', {
							year: 'numeric', 
							month: 'short', 
							day: '2-digit',
							}).format(new Date(data[size - index].published_date))}
						</div>
						<div className="spacing-half linebreak" style={{height: this.state.actualHeight, overflow: 'hidden', fontSize: (this.state.height / 22)}} >{Parser(data[size - index].text)}</div>
						<br />
						<span className="readmore">Show more</span>
					</CardMini>
				</div>
			)
		))
		
		return blog;
	}

	render() { 
		let width = document.getElementById('card').clientWidth;
		let height = window.innerHeight - (document.getElementById('navbar').clientHeight * 2);
		let top = (window.innerHeight - height) / 2;
		let left = (window.innerWidth - width) / 2;
		return ( 
			<div className="p-grid p-justify-center">
				{this.renderPage()}
				{this.state.visible ?
				<Sidebar 
					visible={this.state.visible} 
					style={{background: 'rgba(0, 0, 0, 0.9)', color: 'white', width: width, height: height, top: top, left: left}} 
					baseZIndex={1000000} 
					showCloseIcon={false} 
					dismissable={true} 
					onHide={(e) => this.setState({visible:false})}
				>
				<div className="p-grid-nowrap">
					<div style={{overflow: 'auto'}}>
						<Card className="spacing">
							<div className="remove_space spacing-half" style={{fontSize: ((height - 300) / 27), fontWeight: 'bold'}}>{this.state.data.title}</div>
							<div className="remove_space" style={{fontSize: ((height - 300) / 35)}}>
								by: Jason - {new Intl.DateTimeFormat('en-CA', {
								year: 'numeric', 
								month: 'short', 
								day: '2-digit',
								}).format(new Date(this.state.data.published_date))}
							</div>
							<div className="spacing-half linebreak"  style={{height: (height/1.35), overflow: 'auto', fontSize: ((height - 300) / 32)}} >{Parser(this.state.data.text)}</div>
						</Card>
					</div>
					<div className="p-justify-center">
						<NavLink to={"blog/" + this.state.data.id} >
							<Button 
								style={{left: ((width / 2)  - 63.5)}}
								label="View page"
								className="p-button-raised p-button-rounded"
							/>
						</NavLink>
					</div>
				</div>
				</Sidebar>
				:
				null
				}
			</div>
		);
	}
}
 
export default BlogView;