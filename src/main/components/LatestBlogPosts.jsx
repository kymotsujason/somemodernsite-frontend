import React, { Component } from 'react';
import FetchAPI from './FetchAPI';
import BlogView from '../views/BlogView';
import { Card } from 'primereact/card';

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
				
			</Card>
			
		);
	}
}
 
export default LatestBlogPosts;