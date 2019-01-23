import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import Typist from 'react-typist';

import FeaturedProjects from '../components/FeaturedProjects';
import LatestBlogPosts from '../components/LatestBlogPosts';

import { projects_items } from '../assets/projects_preview';

class Home extends Component {
	state = { }

	render() { 
		return (  
			<div className="spacing main_container">
				<Card className="g-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>Welcome!</span>
					</Typist>
				</Card>
				<br></br>
				<FeaturedProjects 
					projects_items = {projects_items}
				/>
				<br></br>
				<LatestBlogPosts />
			</div>
		);
	}
}
 
export default Home;