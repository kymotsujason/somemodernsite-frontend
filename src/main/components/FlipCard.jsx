import React, { Component } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import { NavLink } from 'react-router-dom';

class FlipCard extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.renderCard = this.renderCard.bind(this);
	}
	
	renderCard() {
		var limit = this.props.limit;
		var counter = 1;
		var portfolio_items = this.props.portfolio_items;
		var cardMenu = [];
		for (var key in portfolio_items) {
			var title = portfolio_items[key].title;
			var subtitle = portfolio_items[key].subtitle;
			var description = portfolio_items[key].description;
			var image = portfolio_items[key].image;
			var url = portfolio_items[key].url;
			var date = portfolio_items[key].date;

			cardMenu.push(
				<div className='p-col-4 card-container' key={key}>
					<div className='card-body'>
						<NavLink to={url}>
							<CardBack 
								title = {title}
								date = {date}
								subtitle = {subtitle}
								description = {description}
							/>

							<CardFront 
								title = {title}
								image = {image}
								date = {date}
							/>
						</NavLink>
					</div>
				</div>
			)
			if (counter < limit) {
				counter++;
			}
			else if (counter === limit) {
				break;
			}
		}
		return cardMenu;
	}

	render() { 
		if (this.props.limit < 0) {
			return (  
				<div className="p-grid p-justify-center">
					{this.renderCard()}
				</div>
			);
		}
		else {
			return (  
				<div className="p-grid_nowrap p-justify-around">
					{this.renderCard()}
				</div>
				
			);
		}
	}
}
 
export default FlipCard;