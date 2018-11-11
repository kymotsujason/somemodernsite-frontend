import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';

class About extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Card style={{background: '#111', color: 'white'}}  className="p-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>About</span>
					</Typist>
				</Card>
				<br></br>
				<Card title="About me" style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
					<div>
						<p>I'm a recent graduate at Trinity Western University with a Computer Science degree. I enjoy programming, gaming, eating, and modding.</p>
					</div>
				</Card>
				<br></br>
				<Card title="About the site" style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
					<div>
						<p>Interested in the site design?</p>
						<p>
							I'm using React as my frontend to make everything look sleek and appealing to the eye (hopefully). 
							Django is the backend server, serving the React files and doing all your usual backend activities.
						</p>
					</div>
				</Card>
			</div>
		);
	}
}
 
export default About;