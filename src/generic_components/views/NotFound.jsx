import React, { Component } from "react";
import Card from "../components/Card";

class NotFound extends Component {
    render() {
        return (
            <div className="spacing main_container">
                <Card>
                    <h2>Not Found</h2>
                    <p>The page you're looking for does not exists.</p>
                </Card>
            </div>
        );
    }
}

export default NotFound;
