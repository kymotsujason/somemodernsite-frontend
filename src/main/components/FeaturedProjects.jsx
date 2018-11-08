import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { NavLink } from 'react-router-dom';

class FeaturedProjects extends Component {
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
					<NavLink to={"/portfolio"}>
						<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
					</NavLink>
					<br></br>
					<br></br>
					<h2>Placeholder title</h2>
					<h4>Placeholder subtitle</h4>
					<p>Some text description</p>
				</Card>
			)
		}
		return cardMenu;
	}

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="center_text">
				<h2>Featured projects</h2>
				<div className="p-grid_nowrap p-justify-around">
					{ this.renderCard() }
				</div>
			</Card>
		);
	}
}
 
export default FeaturedProjects;