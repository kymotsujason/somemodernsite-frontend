import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Loadable from "react-loadable";
import PageLoader from "./v2/generic_components/views/PageLoader";
import withTracker from "./v1/generic_components/components/withTracker";
import ScrollToTop from "./v2/generic_components/components/ScrollToTop";

const AsyncMainOld = Loadable({
    loader: () => import("./v1/main/views/MainOld"),
    loading: PageLoader
});

const AsyncMain = Loadable({
    loader: () => import("./v2/main/views/Main"),
    loading: PageLoader
});

const AsyncNotFound = Loadable({
    loader: () => import("./v1/generic_components/views/NotFound"),
    loading: PageLoader
});

class RouterView extends Component {
    render() {
        return (
            <CookiesProvider>
                <BrowserRouter>
                    <ScrollToTop>
                        <Switch>
                            <Route
                                path="/v1"
                                component={withTracker(AsyncMainOld)}
                            />
                            <Route
                                path="/"
                                component={withTracker(AsyncMain)}
                            />
                            <Route component={AsyncNotFound} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </CookiesProvider>
        );
    }
}

export default RouterView;
