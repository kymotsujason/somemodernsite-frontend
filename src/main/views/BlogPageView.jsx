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
					<div>
						<h2 className="remove_space spacing-half">{data.title}</h2>
						<h4 className="remove_space">by: Jason</h4>
						<small className="remove_space">
							{new Intl.DateTimeFormat('en-CA', { 
							year: 'numeric', 
							month: 'short', 
							day: '2-digit',
							}).format(new Date(data.published_date))}
						</small>
					</div>
					<div className="spacing-half linebreak">{data.text}</div>
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