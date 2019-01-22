import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import Typist from 'react-typist';

class Privacy extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Card className="g-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>Privacy</span>
					</Typist>
				</Card>
				<br></br>
				<Card className="g-col-6">
					<div>
						<h2 className="center_text">Analytics</h2>
						<p className="center_text">
							This site uses Google Analytics to track user activity on this website.
							Currently, I'm only tracking you if you're on this website.
						</p>
						<p className="center_text">
							The data I'm tracking is user behavior data:
						</p>
						<ol className="p-offset-3">
							<li>
								The number of people who have connected to this website
							</li>
							<li>
								The current and subsequent page(s) on this website you visit
							</li>
							<li>
								How long you've stayed on this webiste
							</li>
							<li>
								What you're using to connect to this website (Desktop, Mobile, etc)
							</li>
							<li>
								Your approximate geography/location 
								(feel free to hide yourself with a VPN or other IP hider)
							</li>
						</ol>
						<p className="center_text">
							The data is currently anonymous, since I don't collect/look at user acquisition data.
						</p>
					</div>
				</Card>
				<br></br>
				<Card className="g-col-6">
					<div>
						<h2 className="center_text">Cookies</h2>
						<p className="center_text">
							This site will use cookies to remember data and enhance the experience of using this website.
							An example would be accepting the data consent notification you get the first time you visit (one time thing).
						</p>
						<p className="center_text">
							I plan to use cookies only on certain pages and will list them here as well as what they will do.
						</p>
						<p className="center_text">
							Global cookies in use:
						</p>
						<ol className="p-offset-4">
							<li>
								Cookie notification consent bar
							</li>
						</ol>
						<p className="center_text">
							Pages currently using cookies:
						</p>
						<ol className="p-offset-4">
							<li>
								None
							</li>
						</ol>
					</div>
				</Card>
			</div>
		);
	}
}
 
export default Privacy;