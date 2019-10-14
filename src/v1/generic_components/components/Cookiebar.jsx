import React, { Component } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Cookiebar extends Component {
    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            cookiebar: cookies.get("cookiebar"),
            visible: false,
            width: 0,
            top: 0,
            left: 0
        };
        if (this.state.cookiebar !== "cookiebar") {
            this.state.visible = true;
        }
        this.handleClick = this.handleClick.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        let width = window.innerWidth;
        if (width >= 360) {
            width = 360;
        }
        let top = window.innerHeight / 2 - 57.5;
        let left = window.innerWidth / 2 - width / 2;

        this.setState({
            width: width,
            top: top,
            left: left
        });
    }

    handleClick(cookiebar) {
        const { cookies } = this.props;

        cookies.set("cookiebar", "cookiebar", { path: "/" });
        this.setState({
            cookiebar,
            visible: false
        });
    }

    render() {
        const { cookiebar } = this.state;
        let height = 115;

        if (this.state.visible) {
            return (
                <Sidebar
                    visible={this.state.visible}
                    style={{
                        background: "#111",
                        color: "white",
                        height: height
                    }}
                    position="bottom"
                    baseZIndex={1000000}
                    showCloseIcon={false}
                    dismissable={false}
                    onHide={() => this.setState({ visible: false })}
                >
                    <div className="center_text">
                        <p>
                            This site uses cookies to enhance user experience.
                        </p>
                        <Button
                            type="button"
                            onClick={() => this.handleClick(cookiebar)}
                            label="Sounds good!"
                            className="p-button-success"
                        />
                    </div>
                </Sidebar>
            );
        } else {
            return null;
        }
    }
}

Cookiebar.propTypes = {
    cookies: instanceOf(Cookies).isRequired
};

export default withCookies(Cookiebar);
