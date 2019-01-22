import React, { Component } from 'react';
import Time from "../components/Time";
import { NavLink } from 'react-router-dom';
import '../../index.css';

class Footer extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<div className="center_text footer_bar">
					<div className="p-col-1">
					</div>
					<p>@2018 Jason Yue - Powered by <a style={{color: '#5b63ff'}} href="https://github.com/kymotsujason/somemodernsite-backend">Django</a> and <a style={{color: '#5b63ff'}} href="https://github.com/kymotsujason/somemodernsite-frontend">React</a> - <NavLink style={{color: '#5b63ff'}} to={'/privacy'}>Privacy</NavLink></p>
					<Time />
					<div className="p-col-1">
					</div>
				</div>
			</div>
		);
	}
}
 
export default Footer;