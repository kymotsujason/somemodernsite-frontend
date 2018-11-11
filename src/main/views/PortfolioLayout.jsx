import React, { Component } from 'react';
import { Card } from 'primereact/card';
import Typist from 'react-typist';
import Portfolio from './Portfolio';

import { portfolio_items } from '../assets/portfolio_preview';

class PortfolioLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div className="spacing main_container">
				<Card style={{background: '#111', color: 'white'}}  className="p-col-6 center_text">
					<Typist
						className="typist"
						avgTypingSpeed={50}
						startDelay={300}
					>
						<span>Portfolio</span>
					</Typist>
				</Card>
				<br></br>
				<Portfolio 
					portfolio_items = {portfolio_items}
				/>
			</div>
		);
	}
}
 
export default PortfolioLayout;