import React, { Component } from 'react';

import NotFound from '../../generic_components/views/NotFound';
import { portfolio_items } from '../assets/portfolio_preview';
import Game from './portfolio/react-tutorial-game/Game';

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
			return <Game />
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