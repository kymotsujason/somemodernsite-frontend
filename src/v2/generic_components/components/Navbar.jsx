import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { PropTypes } from "prop-types";
import CustomButton from "./CustomButton";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        };

        this.renderMenuTab = this.renderMenuTab.bind(this);
    }

    renderMenuTab() {
        let tabMenuList = [];
        let item_list = this.props.item_list;
        let size = item_list.length - 1;
        Object.keys(item_list).map(i => {
            let key = size - i;
            let label = item_list[key].label;
            let url = item_list[key].url;

            tabMenuList.push(
                <div key={i}>
                    <NavLink to={url}>
                        <span className="p-menuitem-text nav_menu">
                            {label}
                        </span>
                    </NavLink>
                </div>
            );
        });

        return tabMenuList;
    }

    render() {
        let navClass;
        if (this.state.menu) {
            navClass = "mobile_nav";
        } else {
            navClass = "nav";
        }
        return (
            <div>
                <NavLink to="/">
                    <img
                        className="p-menuitem-text nav_logo"
                        alt="logo"
                        src={logo}
                    />
                </NavLink>
                <div className="pull_right mobile_nav_button">
                    <CustomButton
                        icon="align-justify"
                        onClick={() =>
                            this.setState(prevState => ({
                                menu: !prevState.menu
                            }))
                        }
                    />
                </div>
                <div className={navClass}>{this.renderMenuTab()}</div>
            </div>
        );
    }
}

Navbar.propTypes = {
    item_list: PropTypes.array
};

export default Navbar;
