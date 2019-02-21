import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { PropTypes } from "prop-types";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.renderMenuTab = this.renderMenuTab.bind(this);
    }
    renderMenuTab() {
        var tabMenuList = [];
        var item_list = this.props.item_list;
        for (var key in item_list) {
            var label = item_list[key].label;
            var url = item_list[key].url;

            tabMenuList.push(
                <li key={key} className="pull_right">
                    <NavLink to={url}>
                        <span className="p-menuitem-text nav_menu">
                            {label}
                        </span>
                    </NavLink>
                </li>
            );
        }

        return tabMenuList;
    }

    render() {
        return (
            <div>
                <NavLink to="/">
                    <img
                        className="p-menuitem-text nav_logo"
                        alt="logo"
                        src={logo}
                    />
                </NavLink>
                <ul className="nav">{this.renderMenuTab()}</ul>
            </div>
        );
    }
}

Navbar.propTypes = {
    item_list: PropTypes.array
};

export default Navbar;
