import React, { Component } from 'react';
import { Card } from 'primereact/card';
import FlipCard from '../components/FlipCard';

class Portfolio extends Component {
	state = {  }

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
				<FlipCard 
					portfolio_items = {this.props.portfolio_items}
					limit = {-1}
				/>
			</Card>
		);
	}
}
 
export default Portfolio;