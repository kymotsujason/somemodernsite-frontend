import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import Card from "../../../../generic_components//components/Card";
import CustomButton from "../../../../generic_components/components/CustomButton";
import { PropTypes } from "prop-types";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(currentUser) {
        if (currentUser.trim() !== "") {
            this.props.onLogin(currentUser);
        }
    }

    render() {
        return (
            <Card className="g-col-6 center_text">
                <h3>Choose a username!</h3>
                <span>
                    <InputText
                        tooltip="Enter a username"
                        tooltipOptions={{ position: "left" }}
                        value={this.state.value}
                        onKeyPress={e => {
                            if (e.key === "Enter") {
                                this.handleClick(this.state.value);
                            }
                        }}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                    <CustomButton
                        icon="paper-plane"
                        iconLocation="center"
                        onClick={() => this.handleClick(this.state.value)}
                    />
                </span>
            </Card>
        );
    }
}

Login.propTypes = {
    onLogin: PropTypes.func
};

export default Login;
