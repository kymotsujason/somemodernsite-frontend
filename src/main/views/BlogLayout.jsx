import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';

import Blog from './Blog'

class BlogLayout extends Component {
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
						<span>Blog</span>
					</Typist>
				</Card>
				<Blog />
			</div>
		);
	}
}
 
export default BlogLayout;