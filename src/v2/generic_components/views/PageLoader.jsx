import React from "react";
import Panel from "../components/Panel";
import LinearProgress from "@mui/material/LinearProgress";
import { PropTypes } from "prop-types";

const PageLoader = ({ isLoading, error }) => {
    if (isLoading) {
        return (
            <div
                style={{
                    flexGrow: 1,
                    position: "absolute",
                    width: "100%",
                    top: 0,
                }}
            >
                <LinearProgress />
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

PageLoader.propTypes = {
    error: PropTypes.any,
    isLoading: PropTypes.bool,
};

export default PageLoader;
