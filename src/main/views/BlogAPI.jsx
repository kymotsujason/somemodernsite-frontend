import React, { Component } from 'react';
import FetchAPI from '../components/FetchAPI';
import BlogPageView from './BlogPageView';

class BlogAPI extends Component {
	state = {  }

	render() { 
		var url = "/api/blog/" + this.props.match.params.number;
		return (  
			<div className="spacing main_container">
				<div className="g-col-6">
					<FetchAPI
						endpoint={url}
						render={data => <BlogPageView data={data} />} 
					/>
				</div>
			</div>
		);
	}
}

export default BlogAPI;