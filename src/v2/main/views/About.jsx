import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/Code.png";

class About extends Component {
    render() {
        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="subheader">
                                Discover and learn about who I am
                            </p>
                            <p className="header">
                                My passions and personality
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">Some fun facts about myself</p>
                            <p className="subtitle">
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
                        </span>
                    </div>
                </Panel>
                <div>My Pictures</div>
                <Panel>
                    <div className="center_content">
                        <span>
                            <p className="title">
                                Understand who I am as a person
                            </p>
                            <p className="description">
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
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span>
                            <p className="title">Learn about my passions</p>
                            <p className="description">
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
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                The skills that I've picked up
                            </p>
                            <p className="description">
                                Insert stuff about looking at resume
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="subheader">
                                Now you know my personality and passions, feel
                                free to reach out and start a conversation.
                            </p>
                            <p className="header">
                                Hire an exceptional web developer today
                            </p>
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default About;
