import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { navbar_items } from "../../assets/static_routes";

class Header extends Component {
    render() {
        return (
            <div className="center_content">
                <Navbar item_list={navbar_items} />
            </div>
        );
    }
}

export default Header;
