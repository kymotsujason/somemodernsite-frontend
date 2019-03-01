import React, { Component } from "react";
import Panel from "../components/Panel";

class NotFound extends Component {
    render() {
        return (
            <div>
                <Panel>
                    <div className="center_content center_text">
                        <p className="header" style={{ marginBottom: "0.5em" }}>
                            404 : Page not found
                        </p>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default NotFound;
