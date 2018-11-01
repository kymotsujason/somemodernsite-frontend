import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Main from './main/views/Main';
import NotFound from './generic_components/views/NotFound';

class RouterView extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route 
						path="/" 
						component={Main} 
					/>
					<Route 
						component={NotFound}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default RouterView;