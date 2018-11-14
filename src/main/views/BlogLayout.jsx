import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';
import FetchAPI from '../components/FetchAPI';
import BlogView from './BlogView'

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
				<div className="p-col-6">
					<Card style={{background: '#111', color: 'white'}} className="center_text">
						<FetchAPI
							endpoint={'/api/blog'}
							render={data => 
							<BlogView 
								data={data}
							/>} 
						/>
					</Card>
				</div>
				
			</div>
		);
	}
}
 
export default BlogLayout;