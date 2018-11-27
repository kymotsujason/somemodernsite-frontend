import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import withTracker from './generic_components/components/withTracker';

import Main from './main/views/Main';
import NotFound from './generic_components/views/NotFound';

class RouterView extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route 
						path="/" 
						component={withTracker(Main)} 
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