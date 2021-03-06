import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Loadable from "react-loadable";
import PageLoader from "./v2/generic_components/views/PageLoader";
//import withTracker from "./v1/generic_components/components/withTracker";
import Main from "./v2/main/views/MainLayout";

const AsyncMainOld = Loadable({
    loader: () => import("./v1/main/views/MainOld"),
    loading: PageLoader
});

class RouterView extends Component {
    render() {
        return (
            <CookiesProvider>
                <BrowserRouter>
                    <Switch>
                        {/* <Route
                                path="/v1"
                                component={withTracker(AsyncMainOld)}
                            />
                            <Route path="/" component={withTracker(Main)} /> */}
                        <Route path="/v1" component={AsyncMainOld} />
                        <Route component={Main} />
                    </Switch>
                </BrowserRouter>
            </CookiesProvider>
        );
    }
}

export default RouterView;
