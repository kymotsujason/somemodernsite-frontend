import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../assets/panel.css";

class Panel extends Component {
    renderBody() {
        let children;

        if (this.props.children) {
            children = <div> {this.props.children} </div>;
        }
        return <div className="p-panel-body">{children}</div>;
    }

    render() {
        let body;
        let className = classNames("p-panel p-component", this.props.className);
        let propStyle = this.props.style;
        if (this.props.light) {
            className = classNames(
                "p-panel-light p-component",
                this.props.className
            );
        } else if (this.props.footer) {
            className = classNames(
                "p-panel-footer p-component",
                this.props.className
            );
        }

        body = this.renderBody();

        return (
            <div
                id="panel"
                className={className}
                style={{
                    propStyle,
                    backgroundImage: "url(" + this.props.img + ")"
                }}
            >
                {body}
            </div>
        );
    }
}

Panel.propTypes = {
    style: PropTypes.object,
    img: PropTypes.string,
    light: PropTypes.bool,
    footer: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Panel;
