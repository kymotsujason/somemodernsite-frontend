import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/stores/index";

// css files
import "./index.css";
import "./v1/assets/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "react-image-gallery/styles/css/image-gallery.css";

import "typeface-roboto";

// components

// react-typist fancy blinking
import "react-typist/dist/standalone/Typist.css";

// font awesome
// import all font awesome free icon library
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import RouterView from "./RouterView";

import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

const instance = createInstance({
    urlBase: "https://jasonyue.ca/",
    siteId: 4, // optional, default value: `1`
    //userId: "UID76903202", // optional, default value: `undefined`.
    trackerUrl: "https://analytics.ice55.cloud/matomo.php", // optional, default value: `${urlBase}matomo.php`
    //srcUrl: "https://LINK.TO.DOMAIN/tracking.js", // optional, default value: `${urlBase}matomo.js`
    disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
    heartBeat: {
        // optional, enabled by default
        active: true, // optional, default value: true
        seconds: 10, // optional, default value: `15
    },
    linkTracking: true, // optional, default value: true
    configurations: {
        // optional, default value: {}
        // any valid matomo configuration, all below are optional
        disableCookies: true,
        setSecureCookie: true,
        setRequestMethod: "POST",
    },
});

// Add all icons to the library so you can use it in your page
library.add(fas, far, fab);

// https://www.npmjs.com/package/@fortawesome/react-fontawesome

ReactDOM.render(
    <MatomoProvider value={instance}>
        <Provider store={store}>
            <RouterView />
        </Provider>
    </MatomoProvider>,
    document.getElementById("root")
);
