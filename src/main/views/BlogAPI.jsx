import React, { Component } from 'react';
import FetchAPI from '../components/FetchAPI';
import BlogPageView from './BlogPageView';

class BlogAPI extends Component {
	render() { 
		var url = "/api/blog/" + this.props.match.params.number;
		if (this.props.match.params.number >= 6) {
			url = "/api/blog/v2/pages/" + this.props.match.params.number + "/?type=blog2.BlogPage&fields=text,published_date";
		}

		return (  
			<div className="spacing main_container">
				<div className="g-col-6">
					<FetchAPI
						anim={true}
						endpoint={url}
						render={data => <BlogPageView data={data} />} 
					/>
				</div>
			</div>
		);
	}
}

export default BlogAPI;