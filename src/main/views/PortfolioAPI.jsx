import React, { Component } from 'react';

import NotFound from '../../generic_components/views/NotFound';
import { portfolio_items } from '../assets/portfolio_preview';
import ReactTutorial from './portfolio/ReactTutorial';

class PortfolioAPI extends Component {
	state = {  }

	constructor(props) {
		super(props);

		this.verifyLink = this.verifyLink.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
	}

	isEmpty(data) {
		return (data === null || data === undefined || data === "");
	}

	verifyLink() {
		var path = this.props.match.params.path;

		if(!this.isEmpty(portfolio_items[path])) {
			return <ReactTutorial />
		} 
		else {
			return <NotFound />
		}
	}

	render() { 
		return (  
			<div>
				{ this.verifyLink() }
			</div>
		);
	}
}
 
export default PortfolioAPI;