import React, { Component } from "react";

class CardBack extends Component {
    render() {
        return (
            <div className="card-side side-back">
                <h2 className="remove_space">{this.props.title}</h2>
                <p className="remove_space">
                    <small>{this.props.date}</small>
                </p>
                <h4>{this.props.subtitle}</h4>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default CardBack;
