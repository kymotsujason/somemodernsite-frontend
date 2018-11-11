import React, { Component } from 'react';
import { Card } from 'primereact/card';

import FlipCard from './FlipCard';

class FeaturedProjects extends Component {
	state = {  }

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="center_text">
				<h2>Featured projects</h2>
				<FlipCard 
					portfolio_items = {this.props.portfolio_items}
					limit = {3}
				/>
			</Card>
		);
	}
}
 
export default FeaturedProjects;