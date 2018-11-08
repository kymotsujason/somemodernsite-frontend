import React, { Component } from 'react';
import Header from '../../generic_components/views/Header';
import Footer from '../../generic_components/views/Footer';

import {Route, Switch} from 'react-router-dom';
import NotFound from '../../generic_components/views/NotFound';

import {
	home_url,
	about_url,
	portfolio_url,
	blog_url,
} from "../../assets/static_routes";

import Home from "./Home";
import About from "./About";
import PortfolioLayout from "./PortfolioLayout";
import BlogLayout from "./BlogLayout";

class MainLayout extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<Header />
				
				<div className="main_content">

					<Switch>
						<Route 
							exact
							path={home_url}
							component={Home} 
						/>
						<Route 
							exact
							path={about_url}
							component={About} 
						/>
						<Route 
							exact
							path={portfolio_url}
							component={PortfolioLayout} 
						/>
						<Route 
							exact
							path={blog_url}
							component={BlogLayout} 
						/>
						<Route 
							component={NotFound}
						/>
					</Switch>
				</div>
		
				<Footer />
			</div>
		);
	}
}
 
export default MainLayout;
