import React, { Component } from 'react';
import { Card } from 'primereact/card';


class About extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing">
				<div className="content-section introduction">
					<div className="p-grid p-justify-around p-nogutter">
						<Card title="About me" style={{background: '#111', color: 'white'}} className="p-col-5 center_text">
							<div>
								<p>I'm a recent graduate at Trinity Western University with a Computer Science degree. I enjoy programming, gaming, eating, and modding.</p>
							</div>
						</Card>
						<Card title="About the site" style={{background: '#111', color: 'white'}} className="p-col-5 center_text">
							<div>
								<p>Interested in the site design?</p>
								<p>
									I'm using React as my frontend to make everything look sleek and appealing to the eye (hopefully). 
									Django is the backend server, serving the React files and doing all your usual backend activities.
								</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		);
	}
}
 
export default About;