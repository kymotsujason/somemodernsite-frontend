import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "../assets/card.css";

class Card extends Component {
    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        title: PropTypes.string,
        subTitle: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    renderHeader() {
        return <div className="c-card-header">{this.props.header}</div>;
    }

    renderBody() {
        let title, subTitle, footer, children;

        if (this.props.title) {
            title = <div className="c-card-title">{this.props.title}</div>;
        }
        if (this.props.subTitle) {
            subTitle = (
                <div className="c-card-subtitle">{this.props.subTitle}</div>
            );
        }
        if (this.props.footer) {
            footer = <div className="c-card-footer"> {this.props.footer}</div>;
        }
        if (this.props.children) {
            children = (
                <div className="c-card-content"> {this.props.children} </div>
            );
        }
        return (
            <div className="c-card-body">
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        );
    }

    render() {
        let header, body;
        let className = classNames("c-card c-component", this.props.className);

        if (this.props.header) {
            header = this.renderHeader();
        }
        body = this.renderBody();

        return (
            <div id="card" className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}

export default Card;
