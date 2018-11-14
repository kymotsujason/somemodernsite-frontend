import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';

class BlogView extends Component {
	state = {  }

	constructor(props){
		super(props)

		this.renderPage = this.renderPage(this);
	}

	renderPage() {
		var data = this.props.data.reverse();
		var limit = this.props.limit;
		var blog = [];
		if (limit !== undefined) {
			data = data.slice(0, limit);
		}
		Object.keys(data).map((index) => (
			blog.push(
				<div key={index} className="p-col-4">
					<NavLink to={"/blog/" + data[index].id}>
						<Card style={{background: '#222', color: 'white'}} className="spacing center_text">
							<div>
							<h2 className="remove_space spacing-half">{data[index].title}</h2>
								<h4 className="remove_space">by: Jason</h4>
								<small className="remove_space">
									{new Intl.DateTimeFormat('en-CA', { 
									year: 'numeric', 
									month: 'short', 
									day: '2-digit',
									}).format(new Date(data[index].published_date))}
								</small>
							</div>
							<div className="spacing-half linebreak blog_preview">{data[index].text}</div>
							<br></br>
							<span className="readmore">Read more</span>
						</Card>
					</NavLink>
				</div>
			)
		))

		return blog;
	}

	render() { 
		return (  
			<div className="p-grid p-justify-center">
				{this.renderPage}
			</div>
		);
	}
}
 
export default BlogView;