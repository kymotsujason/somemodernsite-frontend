import React from "react";
import Panel from "../components/Panel";
import Loader from "react-loader-spinner";

const PageLoader = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <div>
                <Panel>
                    <div
                        className="center_text push_down"
                        style={{ paddingTop: "5em" }}
                    >
                        <Loader type="Oval" color="#FFFFFF" />
                        Loading...
                    </div>
                </Panel>
            </div>
        );
    } else if (error) {
        return (
            <div>
                <Panel>
                    <div
                        className="center_text push_down"
                        style={{ paddingTop: "5em" }}
                    >
                        <p className="header" style={{ marginBottom: "0.5em" }}>
                            404 : Page not found
                        </p>
                    </div>
                </Panel>
            </div>
        );
    } else {
        return null;
    }
};

export default PageLoader;
