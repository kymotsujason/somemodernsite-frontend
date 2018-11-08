import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';

class Portfolio extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderCard = this.renderCard.bind(this);
	}

	renderCard() {
		var cardMenu = [];

		for (var i = 0; i < 5; i++) {
			cardMenu.push(
				<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
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
			<div className="p-grid p-justify-around p-nogutter">
				{ this.renderCard() }
			</div>
		);
	}
}
 
export default Portfolio;