import React, { Component } from 'react';
import FetchAPI from './FetchAPI';
import BlogView from './BlogView';
import Card from '../../generic_components//components/Card';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';

class LatestBlogPosts extends Component {
	state = {  }

	render() { 
		return (  
			<Card className="g-col-6">
				<h2 className="center_text">Latest Blog Posts</h2>
				
				<FetchAPI
					endpoint={'/api/blog'}
					render={data => 
					<BlogView 
						data={data}
						limit={3}
					/>} 
				/>
				<br></br>
				<div className="center_text">
					<NavLink to="/blog">
						<Button label="View more" className="p-button-raised p-button-rounded" />
					</NavLink>
				</div>
			</Card>
			
		);
	}
}
 
export default LatestBlogPosts;