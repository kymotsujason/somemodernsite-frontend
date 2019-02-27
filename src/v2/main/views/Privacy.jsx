import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";

class Privacy extends Component {
    render() {
        if (document.title !== "Privacy Policy") {
            document.title = "Privacy Policy";
        }

        return (
            <div>
                <Panel className="main_content">
                    <div className="center_content">
                        <p className="title">Privacy Policy</p>
                        <div className="privacy">
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus sit amet eros suscipit,
                                rutrum ante gravida, imperdiet purus. Mauris
                                lectus arcu, sodales vel tortor et, tincidunt
                                faucibus mauris. Sed et volutpat erat.
                                Pellentesque nec sapien eros. Nullam id molestie
                                nisi. Donec a convallis purus, id vehicula nisl.
                                Nullam non magna mattis, placerat purus at,
                                faucibus elit. Maecenas eu dictum enim. Fusce
                                consequat tortor nulla, non iaculis arcu
                                eleifend ac. Vestibulum rutrum lorem id erat
                                hendrerit efficitur. Quisque ornare laoreet
                                lacinia. Sed id consequat ligula. Interdum et
                                malesuada fames ac ante ipsum primis in
                                faucibus. Curabitur vitae pulvinar augue.
                            </p>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default Privacy;
