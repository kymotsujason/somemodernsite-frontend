import React, { Component } from 'react';

import Blog from './Blog'

class BlogLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing content-section introduction">
				<Blog />
			</div>
		);
	}
}
 
export default BlogLayout;