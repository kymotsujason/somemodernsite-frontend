import React, { Component } from 'react';
import Portfolio from './Portfolio';

import { portfolio_items } from '../assets/portfolio_preview';

class PortfolioLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Portfolio 
					portfolio_items = {portfolio_items}
				/>
			</div>
		);
	}
}
 
export default PortfolioLayout;