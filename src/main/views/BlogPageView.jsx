import React, { Component } from 'react';
import Card from '../../generic_components//components/Card';
import Parser from 'html-react-parser';

class BlogPageView extends Component {
	state = {  }

	constructor(props){
		super(props)

		this.renderPage = this.renderPage.bind(this);
	}

	renderPage() {
		var data = this.props.data;
		var blog = [];
		blog.push(
			<div key={data.id} >
				<Card className="spacing">
					<div>
						<h3 className="remove_space spacing-half">{data.title}</h3>
						<h4 className="remove_space">by: Jason</h4>
						<small className="remove_space">
							{new Intl.DateTimeFormat('en-CA', { 
							year: 'numeric', 
							month: 'short', 
							day: '2-digit',
							}).format(new Date(data.published_date))}
						</small>
					</div>
					<div className="spacing-half linebreak" >{Parser(data.text)}</div>
				</Card>
			</div>
		)
		return blog;
	}

	render() { 
		return (  
			<div>
				{this.renderPage()}
			</div>
		);
	}
}
 
export default BlogPageView;