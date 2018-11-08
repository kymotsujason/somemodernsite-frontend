import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';

import FeaturedProjects from '../components/FeaturedProjects'
import LatestBlogPosts from '../components/LatestBlogPosts'

class Home extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing introduction content-section p-grid p-align-center p-nogutter p-dir-col">
				<Card style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
					<div>
						<Typist
							className="typist"
							avgTypingSpeed={40}
							startDelay={500}
						>
							<span>Welcome to my website!</span>
						</Typist>
					</div>
				</Card>
				<br/><br/>
				<FeaturedProjects />
				<br></br>
				<br></br>
				<LatestBlogPosts />
			</div>
		);
	}
}
 
export default Home;