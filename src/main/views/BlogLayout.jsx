import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import Typist from 'react-typist';
import FetchAPI from '../components/FetchAPI';
import BlogView from './BlogView'

class BlogLayout extends Component {
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
						<span>Blog</span>
					</Typist>
				</Card>
				<br></br>
				<div className="g-col-6">
					<Card className="">
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