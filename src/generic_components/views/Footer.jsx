import React, { Component } from 'react';
import Time from "../components/Time";
import { NavLink } from 'react-router-dom';

class Footer extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<div className="center_text footer_bar">
					<div className="p-col-1">
					</div>
					<p>@2018 Jason Yue - Powered by <a style={{color: 'white'}} href="https://github.com/kymotsujason/somemodernsite-backend">Django</a> and <a style={{color: 'white'}} href="https://github.com/kymotsujason/somemodernsite-frontend">React</a> - <NavLink style={{color: 'white'}} to={'/privacy'}>Privacy</NavLink></p>
					<Time />
					<div className="p-col-1">
					</div>
				</div>
			</div>
		);
	}
}
 
export default Footer;