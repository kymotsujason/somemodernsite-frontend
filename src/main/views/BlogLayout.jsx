import React, { Component } from 'react';

import Blog from './Blog'

class BlogLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Blog />
			</div>
		);
	}
}
 
export default BlogLayout;