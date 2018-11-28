import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import withTracker from './generic_components/components/withTracker'
import { CookiesProvider } from 'react-cookie';


import Main from './main/views/Main';
import NotFound from './generic_components/views/NotFound';

class RouterView extends Component {
	render() {
		return (
			<CookiesProvider>
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
			</CookiesProvider>
			
		);
	}
}

export default RouterView;