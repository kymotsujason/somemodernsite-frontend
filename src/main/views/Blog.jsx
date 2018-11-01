import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';

class Blog extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<div className="spacing">
					<div className="content-section introduction">
						<div className="p-grid p-justify-around p-nogutter">
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
								<NavLink to={"/blog"}>
									<span className="readmore">Read more</span>
								</NavLink>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
								<NavLink to={"/blog"}>
									<span className="readmore">Read more</span>
								</NavLink>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
								<NavLink to={"/blog"}>
									<span className="readmore">Read more</span>
								</NavLink>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">
								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
								<NavLink to={"/blog"}>
									<span className="readmore">Read more</span>
								</NavLink>
							</Card>
							<Card style={{background: '#222', color: 'white'}} className="p-col-2 center_text">

								<h2>Placeholder title</h2>
								<h4>Placeholder subtitle</h4>
								<p>Some text description</p>
								<NavLink to={"/blog"}>
									<span className="readmore">Read more</span>
								</NavLink>
							</Card>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Blog;