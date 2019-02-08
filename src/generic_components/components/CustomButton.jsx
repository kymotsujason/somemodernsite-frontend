import React, { Component } from "react";
import "../assets/button.css";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

class CustomButton extends Component {
    /*
        parameters:
            type => "submit" or "button", by default button
            label => "text of button"
            className => "other classes for the button"
            iconSize => icon size based on font awesome
            icon => icon name based on font awesome
            iconLocation => "left" "right" "center" renders the icon on either left or right
            onClick => on click event to call a prop's function
            btnRaised => true/false, set button as raised 
            btnRound => true/false, set button to rounded
            disabled => true/false, disable the button
            staticBtn => true/false visual representation, not a button
            textOnly => true/false, enables a button with text only, will attempt to minimize the text into a a small icon
    */

    constructor(Props) {
        super(Props);

        //rendering ui components
        this.renderLeftIcon = this.renderLeftIcon.bind(this);
        this.renderRightIcon = this.renderRightIcon.bind(this);
        this.renderButtonPrimeReactClass = this.renderButtonPrimeReactClass.bind(
            this
        );
        this.renderStaticBtn = this.renderStaticBtn.bind(this);
        this.renderRaisedBtn = this.renderRaisedBtn.bind(this);
        this.renderRoundedBtn = this.renderRoundedBtn.bind(this);

        //action handlers
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    isEmpty(data) {
        return data === undefined || data === "" || data === null;
    }

    renderRightIcon() {
        if (
            !this.isEmpty(this.props.icon) &&
            this.props.iconLocation === "right"
        ) {
            return (
                <FontAwesomeIcon
                    icon={
                        !this.isEmpty(this.props.icon)
                            ? this.props.icon
                            : undefined
                    }
                    size={
                        !this.isEmpty(this.props.iconSize)
                            ? this.props.iconSize
                            : undefined
                    }
                    className={"pi p-c p-button-icon p-button-icon-right"}
                />
            );
        }
    }

    renderLeftIcon() {
        if (
            this.props.icon !== undefined &&
            this.props.iconLocation !== "right"
        ) {
            return (
                <FontAwesomeIcon
                    icon={
                        !this.isEmpty(this.props.icon)
                            ? this.props.icon
                            : undefined
                    }
                    size={
                        !this.isEmpty(this.props.iconSize)
                            ? this.props.iconSize
                            : undefined
                    }
                    className={"pi p-c p-button-icon p-button-icon-left"}
                />
            );
        }
    }

    //by default non-static
    renderStaticBtn() {
        if (this.props.staticBtn) {
            return "p-button_static";
        } else {
            return "";
        }
    }

    //by default raised
    renderRaisedBtn() {
        if (!this.props.btnRaised) {
            return "";
        } else {
            return "p-button-raised";
        }
    }

    //by default non-rounded
    renderRoundedBtn() {
        if (this.props.btnRound) {
            return "p-button-rounded";
        } else {
            return "";
        }
    }

    renderButtonPrimeReactClass() {
        if (this.isEmpty(this.props.label) && !this.isEmpty(this.props.icon)) {
            return "p-button-icon-only";
        } else if (
            this.isEmpty(this.props.icon) &&
            !this.isEmpty(this.props.label) &&
            (!this.isEmpty(this.props.textOnly) ? this.props.textOnly : false)
        ) {
            return "p-button-text-only";
        } else if (
            !this.isEmpty(this.props.icon) &&
            this.props.iconLocation === "right"
        ) {
            return "p-button-text-icon-right";
        } else if (
            !this.isEmpty(this.props.icon) &&
            this.props.iconLocation !== "right"
        ) {
            return "p-button-text-icon-left";
        } else {
            return "";
        }
    }

    handleOnClick(event) {
        //if the button is clicked

        //if parent set state function is not undefined
        if (!this.isEmpty(this.props.onClick)) {
            this.props.onClick(event, this.props.name);
        }
    }

    render() {
        return (
            <React.Fragment>
                <button
                    type={
                        !this.isEmpty(this.props.type)
                            ? this.props.type
                            : "button"
                    }
                    className={
                        "p-button p-component " +
                        this.renderButtonPrimeReactClass() +
                        " " +
                        this.renderRaisedBtn() +
                        " " +
                        this.renderRoundedBtn() +
                        " " +
                        this.renderStaticBtn() +
                        " " +
                        (!this.isEmpty(this.props.className)
                            ? this.props.className
                            : "")
                    }
                    onClick={e => this.handleOnClick(e)}
                    disabled={this.props.disabled}
                >
                    {this.renderLeftIcon()}

                    <span
                        className={
                            "p-button-text p-c " +
                            (!this.isEmpty(this.props.labelClassName)
                                ? this.props.labelClassName
                                : "")
                        }
                    >
                        {!this.isEmpty(this.props.icon) &&
                        this.props.iconLocation !== "right" ? (
                                <span>&nbsp;</span>
                            ) : null}

                        {this.props.label}

                        {!this.isEmpty(this.props.icon) &&
                        this.props.iconLocation === "right" ? (
                                <span>&nbsp;</span>
                            ) : null}
                    </span>

                    {this.renderRightIcon()}
                </button>
            </React.Fragment>
        );
    }
}

CustomButton.propTypes = {
    iconLocation: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    labelClassName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    textOnly: PropTypes.bool,
    staticBtn: PropTypes.bool,
    btnRound: PropTypes.bool,
    btnRaised: PropTypes.bool,
    iconSize: PropTypes.number
};

export default CustomButton;
