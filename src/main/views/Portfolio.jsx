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
		var portfolio_items = this.props.portfolio_items;
		var cardMenu = [];

		for (var key in portfolio_items) {
			var title = portfolio_items[key].title;
			var subtitle = portfolio_items[key].subtitle;
			var description = portfolio_items[key].description;
			var url = portfolio_items[key].url;
			var date = portfolio_items[key].date;

			cardMenu.push(
				<Card style={{background: '#222', color: 'white'}} className="p-col-4 center_text"  key={key}>
					<NavLink to={url}>
						<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
					</NavLink>
					<br></br>
					<br></br>
					<h2 className="remove_space">{title}</h2>
					<p className="remove_space"><small>{date}</small></p>
					<h4>{subtitle}</h4>
					<p>{description}</p>
				</Card>
			)
		}
		return cardMenu;
	}

	render() { 
		return (  
			<div className="p-col-6 p-grid p-justify-center">
				{ this.renderCard() }
			</div>
		);
	}
}
 
export default Portfolio;