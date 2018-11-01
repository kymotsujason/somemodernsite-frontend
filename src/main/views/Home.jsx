import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing">
				<div className="content-section introduction">
					<div className="p-grid p-align-center p-nogutter p-dir-col">
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
						<Card style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
							<h2>Featured projects</h2>
							<div className="p-grid p-justify-around p-nogutter">
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<a href="https://github.com/kymotsujason/">
									<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
									</a>
									<br></br>
									<br></br>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
								</Card>
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<a href="https://github.com/kymotsujason/">
									<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
									</a>
									<br></br>
									<br></br>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
								</Card>
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<a href="https://github.com/kymotsujason/">
									<img border="0" alt="Placeholder" src={require('../assets/placeholder.png')} width="100%" height="100%"></img>
									</a>
									<br></br>
									<br></br>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
								</Card>
							</div>
						</Card>
						<br></br>
						<br></br>
						<Card style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
							<div>
								<h2>Blog updates</h2>
								<div className="p-grid p-justify-around p-nogutter">
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<div>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
									<NavLink to={"/blog"}>
										<span className="readmore">Read more</span>
									</NavLink>
									</div>
								</Card>
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<div>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
									<NavLink to={"/blog"}>
										<span className="readmore">Read more</span>
									</NavLink>
									</div>
								</Card>
								<Card style={{background: '#222', color: 'white'}} className="p-col-3-5 center_text">
									<div>
									<h2>Placeholder title</h2>
									<h4>Placeholder subtitle</h4>
									<p>Some text description</p>
									<NavLink to={"/blog"}>
										<span className="readmore">Read more</span>
									</NavLink>
									</div>
								</Card>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
				/* <i className="pi pi-spin pi-spinner troll_css"></i>
				<FontAwesomeIcon icon="angry" size="2x" pulse/>

				<button className={"button_size"}> <FontAwesomeIcon icon="arrow-left" size="2x" spin/> Hi there </button>

				<button className={"button_size"}> <FontAwesomeIcon icon="check" size="2x" spin/> Submit </button> */
		);
	}
}
 
export default Home;