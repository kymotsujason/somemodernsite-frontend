import React from "react";
import Panel from "../components/Panel";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        position: "absolute",
        width: "100%",
        top: 0
    }
});

const PageLoader = ({ isLoading, error }) => {
    const classes = useStyles();

    if (isLoading) {
        return (
            <div className={classes.root}>
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

export default PageLoader;
