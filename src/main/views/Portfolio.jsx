import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';

class Portfolio extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<div className="spacing">
					<div className="content-section introduction">
						<div className="p-grid p-justify-around p-nogutter">
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<NavLink to={"/portfolio"}>
								<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
								</NavLink>
								<br></br>
								<br></br>
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<NavLink to={"/portfolio"}>
								<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
								</NavLink>
								<br></br>
								<br></br>
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<NavLink to={"/portfolio"}>
								<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
								</NavLink>
								<br></br>
								<br></br>
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<NavLink to={"/portfolio"}>
								<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
								</NavLink>
								<br></br>
								<br></br>
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<NavLink to={"/portfolio"}>
								<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
								</NavLink>
								<br></br>
								<br></br>
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Portfolio;