import React, { Component } from 'react';
import { Card } from 'primereact/card';

class BlogPageView extends Component {
	state = {  }

	constructor(props){
		super(props)

		this.renderPage = this.renderPage(this);
	}

	renderPage() {
		var data = this.props.data;
		var blog = [];
		blog.push(
			<div key={data.id} >
				<Card style={{background: '#222', color: 'white'}} className="spacing center_text">
					<h2>{data.title}</h2>
					<h4>by: Jason ({data.published_date})</h4>
					<div className="linebreak">{data.text}</div>
				</Card>
			</div>
		)
		return blog;
	}

	render() { 
		return (  
			<div>
				{this.renderPage}
			</div>
		);
	}
}
 
export default BlogPageView;