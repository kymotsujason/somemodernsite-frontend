import React, { Component } from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import { NavLink } from 'react-router-dom';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Cookiebar extends Component {
	state = {  
		visibleBottom: false,
	}

	static propTypes = {
		cookies: instanceOf(Cookies).isRequired
	};

	constructor(props) {
		super(props);

		const { cookies } = props;
		this.state = {
			cookiebar: cookies.get('cookiebar')
		};
		if (this.state.cookiebar !== 'cookiebar') {
			this.state.visibleBottom = true;
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(cookiebar) {
		const { cookies } = this.props;
 
		cookies.set('cookiebar', 'cookiebar', { path: '/' });
		this.setState({
			cookiebar, 
			visibleBottom: false
		});
	}

	render() { 
		const { cookiebar } = this.state;
		
		return (  
			<Sidebar visible={this.state.visibleBottom} style={{background: '#111', color: 'white', height:'7.5em'}} position="bottom" baseZIndex={1000000} showCloseIcon={false} dismissable={false} onHide={(e) => this.setState({visible:false})}>
				<div className='p-grid nested-grid'>
					<div className='p-col-8'>
						<div className='p-grid' style={{marginLeft:'.25em'}}>
							<div className='p-col-12 remove_space p-'>
								<h2 style={{fontWeight:'normal'}}>This site uses cookies to enhance user experience. Find out more about how they're used <NavLink style={{color: 'light-blue'}} to={'/privacy'}>here</NavLink>!</h2>
							</div>
							<div className='p-col-12 remove_space'>
								<small>Don't worry, I'll eat the cookies before the big guys get 'em!</small>
							</div>
						</div>
					</div>
					<div className='p-col-4 p-col-align-center'>
						<Button type="button" onClick={() => this.handleClick(cookiebar)} label="Sounds good!" className="p-button-success pull_right" style={{marginRight:'.25em'}} />
					</div>
				</div>
			</Sidebar>
		);
	}
}
 
export default withCookies(Cookiebar);