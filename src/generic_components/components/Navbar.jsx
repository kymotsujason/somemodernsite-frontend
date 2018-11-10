import React, { Component } from 'react';

//redirect with javascript to a link
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

	constructor(props) {
		super(props);

		this.renderMenuTab = this.renderMenuTab.bind(this);
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
	renderMenuTab() {

		var tabMenuList = [];
		var item_list = this.props.item_list;
		for(var key in item_list) {

			var label = item_list[key].label;
			// var icon = item_list[key].icon;
			var url = item_list[key].url;

			tabMenuList.push(
				/* <li key={key} className={"p-tabmenuitem p-highlight " + this.highlightCurrButton(url)}> */
				<li key={key} className={"pull_right"}>
					<NavLink to={url}>
						<div className={" "}>
							{/* <span className={icon + " p-menuitem-icon"}></span> */}
							<span className="p-menuitem-text navbar_menu">{label}</span>
						</div>
					</NavLink>
				</li>
			
			)
		}

		return tabMenuList;
	}

	render() { 
		return (  
            <div>
				<ul className="navbar " >
					<NavLink to={"/"}>
						<span className="p-menuitem-text navbar_menu">Logo</span>
					</NavLink>
					{this.renderMenuTab()}
				</ul>
            </div>
		);
	}
}
 
export default Navbar;


