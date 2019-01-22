import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import FlipCard from '../components/FlipCard';

class Projects extends Component {
	state = {  }

	render() { 
		return (  
			<Card className="g-col-6 center_text">
				<FlipCard 
					projects_items = {this.props.projects_items}
					limit = {-1}
				/>
			</Card>
		);
	}
}
 
export default Projects;