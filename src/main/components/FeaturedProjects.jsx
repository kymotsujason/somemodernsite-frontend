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
		var counter = 0;
		var portfolio_items = this.props.portfolio_items;
		var cardMenu = [];
		for (var key in portfolio_items) {
			if (counter < this.state.limit) {
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
			else {
				break;
			}
			counter ++;
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