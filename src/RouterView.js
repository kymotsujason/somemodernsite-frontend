import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import withTracker from "./v1/generic_components/components/withTracker";
import ScrollToTop from "./v2/generic_components/components/ScrollToTop";

import Main from "./v2/main/views/Main";
import MainOld from "./v1/main/views/MainOld";
import NotFound from "./v1/generic_components/views/NotFound";

class RouterView extends Component {
    render() {
        return (
            <CookiesProvider>
                <BrowserRouter>
                    <ScrollToTop>
                        <Switch>
                            <Route
                                path="/v1"
                                component={withTracker(MainOld)}
                            />
                            <Route path="/" component={withTracker(Main)} />
                            <Route component={NotFound} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </CookiesProvider>
        );
    }
}

export default RouterView;
