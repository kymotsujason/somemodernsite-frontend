import React, { Component } from 'react';
import Time from "../components/Time";

class Footer extends Component {
	state = {  }
	render() { 
		return (  
			<div>
				<div className="center_text footer_bar">
					<div className="p-col-1">
					</div>
					<p>@2018 Jason Yue - Powered by Django and React <a href="https://github.com/kymotsujason/SomeModernSite">(Github)</a></p>
					
					<Time />
					<div className="p-col-1">
					</div>
				</div>
			</div>
		);
	}
}
 
export default Footer;