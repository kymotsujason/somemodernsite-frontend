import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';

import FlipCard from './FlipCard';

class FeaturedProjects extends Component {
	state = {  }

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="center_text">
				<h2>Featured projects</h2>

				<FlipCard 
					projects_items = {this.props.projects_items}
					limit = {3}
				/>

				<NavLink to="/projects">
					<Button label="View more" className="p-button-raised p-button-rounded" />
				</NavLink>
			</Card>
		);
	}
}
 
export default FeaturedProjects;