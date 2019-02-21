import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../generic_components/views/NotFound";
import MainLayout from "./MainLayout";

import "../assets/main.css";

class Main extends Component {
    render() {
        return (
            <div className="main_content dark_background">
                <Switch>
                    <Route path="/" component={MainLayout} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Main;
