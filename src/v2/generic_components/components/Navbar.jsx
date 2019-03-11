import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-min.png";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false
        };

        this.renderMenuTab = this.renderMenuTab.bind(this);
    }

    renderMenuTab(navURL) {
        let tabMenuList = [];
        let item_list = this.props.item_list;
        let size = item_list.length - 1;
        Object.keys(item_list).map(i => {
            let key = size - i;
            let label = item_list[key].label;
            let url = item_list[key].url;
            tabMenuList.push(
                <div key={i}>
                    {(navURL[3] === label.toLowerCase() ||
                        (navURL[3] === "" && label.toLowerCase() === "home")) &&
                    navURL.length === 4 ? (
                            <span
                                className="p-menuitem-text nav_menu"
                                style={{ color: "lightgray" }}
                            >
                                {label}
                            </span>
                        ) : (
                            <NavLink
                                to={url}
                                onClick={() =>
                                    this.state.menu
                                        ? this.setState(prevState => ({
                                            menu: !prevState.menu
                                        }))
                                        : null
                                }
                            >
                                <span className="p-menuitem-text nav_menu">
                                    {label}
                                </span>
                            </NavLink>
                        )}
                </div>
            );
        });

        return tabMenuList;
    }

    render() {
        let navClass;
        let navURL = window.location.href.split("/");
        navURL[3] = navURL[3].trim();
        if (this.state.menu) {
            navClass = "mobile_nav";
        } else {
            navClass = "nav";
        }
        return (
            <div>
                {navURL[3] === "" ? (
                    <img
                        className="p-menuitem-text nav_logo"
                        alt="logo"
                        src={logo}
                    />
                ) : (
                    <NavLink to="/">
                        <img
                            className="p-menuitem-text nav_logo"
                            alt="logo"
                            src={logo}
                        />
                    </NavLink>
                )}

                <div className="pull_right mobile_nav_button">
                    <FontAwesomeIcon
                        style={{
                            backgroundColor: "transparent",
                            border: "transparent",
                            cursor: "pointer",
                            marginRight: "2em",
                            marginTop: "1em"
                        }}
                        icon={faBars}
                        size="2x"
                        onClick={() =>
                            this.setState(prevState => ({
                                menu: !prevState.menu
                            }))
                        }
                    />
                </div>
                <div className={navClass}>{this.renderMenuTab(navURL)}</div>
            </div>
        );
    }
}

Navbar.propTypes = {
    item_list: PropTypes.array
};

export default Navbar;
