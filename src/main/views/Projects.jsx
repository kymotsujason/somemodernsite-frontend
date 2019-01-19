import React, { Component } from 'react';
import { Card } from 'primereact/card';
import FlipCard from '../components/FlipCard';

class Projects extends Component {
	state = {  }

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="g-col-6 center_text">
				<FlipCard 
					projects_items = {this.props.projects_items}
					limit = {-1}
				/>
			</Card>
		);
	}
}
 
export default Projects;