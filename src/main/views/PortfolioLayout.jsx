import React, { Component } from 'react';
import Portfolio from './Portfolio';

class PortfolioLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing content-section introduction">
				<Portfolio />
			</div>
		);
	}
}
 
export default PortfolioLayout;