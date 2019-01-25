import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../main/assets/logo.png';

class Navbar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			height: 0,
		}

		this.renderMenuTab = this.renderMenuTab.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		// this.highlightCurrButton = this.highlightCurrButton.bind(this);
	}

	// highlightCurrButton(url) {
	// 	var currentUrl = window.location.pathname;

	// 	if(currentUrl === url) {
	// 		return "selected_menu_tab";
	// 	}
	// 	else {
	// 		return "non_selected_menu_tab";
	// 	}
	// }

	/*
		
		this.props.history.push(url);
		withRouter(component)
	*/

	componentDidMount() {
		this.updateWindowDimensions();
  		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		let height = document.getElementById('nav').clientHeight;
		this.setState({ 
			height: height,
		});
	}
	
	renderMenuTab() {

		var tabMenuList = [];
		var item_list = this.props.item_list;
		for(var key in item_list) {

			var label = item_list[key].label;
			// var icon = item_list[key].icon;
			var url = item_list[key].url;

			tabMenuList.push(
				/* <li key={key} className={"p-tabmenuitem p-highlight " + this.highlightCurrButton(url)}> */
				<li id="nav" key={key} className={"pull_right"}>
					<NavLink to={url}>
						{/* <span className={icon + " p-menuitem-icon"}></span> */}
						<span className="p-menuitem-text navbar_menu">{label}</span>
					</NavLink>
				</li>
			)
		}

		return tabMenuList;
	}

	render() { 
		return (  
            <div>
				<ul className="navbar" >
					<NavLink to={"/"}>
						<img className="p-menuitem-text navbar_logo" alt="logo" src={logo} height={this.state.height}/>
					</NavLink>
					{this.renderMenuTab()}
				</ul>
            </div>
		);
	}
}
 
export default Navbar;


