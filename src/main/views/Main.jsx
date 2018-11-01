import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

import MainLayout from './MainLayout';
import NotFound from '../../generic_components/views/NotFound';
import '../assets/main.css';

class Main extends Component {
	state = {  }
	render() { 
		return (
			<div className="main_background">
				<Switch>
					<Route 
						path="/" 
						component={MainLayout} 
					/>
					<Route 
						component={NotFound}
					/>
				</Switch>
			</div>
		);
	}
}
 
export default Main;