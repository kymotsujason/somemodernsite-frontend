import React, { Component } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import { NavLink } from 'react-router-dom';

class FlipCard extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.state = {
			height: 0,
		}

		this.renderCard = this.renderCard.bind(this);
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
		let height = document.getElementById('flipcard').clientWidth;
		if (height > 230) {
			height = 230 + (0.6 * (height - 230));
		}
		this.setState({ 
			height: height,
		});
	}
	
	renderCard() {
		var limit = this.props.limit;
		var counter = 1;
		var projects_items = this.props.projects_items;
		var cardMenu = [];
		for (var key in projects_items) {
			var title = projects_items[key].title;
			var subtitle = projects_items[key].subtitle;
			var description = projects_items[key].description;
			var image = projects_items[key].image;
			var url = projects_items[key].url;
			var date = projects_items[key].date;

			cardMenu.push(
				<div id='flipcard' className='p-col-4 card-container' key={key} style={{height: this.state.height}}>
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
				<div className="p-grid_nowrap p-justify-center">
					{this.renderCard()}
				</div>
				
			);
		}
	}
}
 
export default FlipCard;