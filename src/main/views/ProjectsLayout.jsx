import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';
import Projects from './Projects';

import { projects_items } from '../assets/projects_preview';

class ProjectsLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Card style={{background: '#111', color: 'white'}}  className="g-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>Projects</span>
					</Typist>
				</Card>
				<br></br>
				<Projects 
					projects_items = {projects_items}
				/>
			</div>
		);
	}
}
 
export default ProjectsLayout;