import React, { Component } from 'react';
import FetchAPI from './FetchAPI';
import BlogView from '../views/BlogView';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';

class LatestBlogPosts extends Component {
	state = {  }

	render() { 
		return (  
			<Card style={{background: '#111', color: 'white'}} className="center_text">
				<h2>Latest Blog Posts</h2>
				
				<FetchAPI
					endpoint={'/api/blog'}
					render={data => 
					<BlogView 
						data={data}
						limit={3}
					/>} 
				/>
				
				<NavLink to="/blog">
					<Button label="View more" className="p-button-raised p-button-rounded" />
				</NavLink>
			</Card>
			
		);
	}
}
 
export default LatestBlogPosts;