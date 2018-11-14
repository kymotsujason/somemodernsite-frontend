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
						<p>
							I'm a recent graduate at Trinity Western University with a Computer Science degree. I enjoy programming, gaming, and eating.
						</p>
						<h4>Programming</h4>
						<p>
							In software development, I generally try to use C++, but I'm comfortable with C# and Java. Though I haven't used it often, I'm starting to use Python a lot more now.
						</p>
						<p>
							When it comes to web development, I used to use PHP. However, I've started using Python and JavaScript to create more interactive and fluid pages.
						</p>
						<h4>Gaming</h4>
						<p>
							My favorite game to play is Osu, but I also play games such as MapleStory 2, League of Legends, and others.
							I'm more of a semi-competitive gamer, but I like to play it casual whenever I can (only because I lack talent for competitive =P).
						</p>
						<h4>Eating</h4>
						<p>
							I love eating sushi. When I say sushi, I mean all the different ways it is served: sashimi, nigiri, rolls, cones, etc. 
							I also like Ramen and ate it pretty much all the time in University.
							I really don't have much of a preference. Chinese food, Japanese food, Korean food, Chipotle, American food, they're all great!
						</p>
					</div>
				</Card>
				<br></br>
				<Card title="About the site" style={{background: '#111', color: 'white'}} className="p-col-6 center_text">
					<div>
						<p>Interested in the site design?</p>
						<p>
							I'm using React as my frontend to make everything look sleek and appealing to the eye (hopefully). 
							Django is the backend server, serving the React files and doing all your usual backend activities.
							The site is hosted on AWS with dynamic data (Blog posts) being served from Amazon RDS (PostgreSQL).
							Memcache will be implemented with Amazon Redis, though since this is a small site, I might just skip it.
						</p>
						<p>
							Currently, I'm using a gradiant as a temporary background as I experiment with different UI designs.
							It might be better if I went straight with a Dark mode theme instead, or with a glass-like blur theme.
						</p>
					</div>
				</Card>
			</div>
		);
	}
}
 
export default About;