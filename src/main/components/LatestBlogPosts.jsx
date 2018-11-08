import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { NavLink } from 'react-router-dom';

class LatestBlogPosts extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.state = {
			limit: 3,
		}

		this.renderCard = this.renderCard.bind(this);
	}

	renderCard() {
		var cardMenu = [];
		for (var i = 0; i < this.state.limit; i++) {
			cardMenu.push(
				<Card style={{background: '#222', color: 'white'}} className="p-col center_text" key={i}>
					<h2>Placeholder title</h2>
					<h4>Placeholder subtitle</h4>
					<p>Some text description</p>
					<NavLink to={"/blog"}>
						<span className="readmore">Read more</span>
					</NavLink>
				</Card>
			)
		}
		return cardMenu;
	}

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="center_text">
				<h2>Blog updates</h2>
				<div className="p-grid_nowrap p-justify-around">
					{ this.renderCard() }
				</div>
			</Card>
		);
	}
}
 
export default LatestBlogPosts;