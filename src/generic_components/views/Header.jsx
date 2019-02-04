import React, { Component } from 'react';

import Navbar from "../../generic_components/components/Navbar";

import { navbar_items }  from "../../assets/static_routes";

class Header extends Component {
	render() {
        return (
            <div>
                <Navbar
					item_list={navbar_items}
				/>
            </div>
        );
    }
}
 
export default Header;