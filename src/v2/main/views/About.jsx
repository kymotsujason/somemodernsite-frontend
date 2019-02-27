import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import code_img from "../assets/code.png";
import { NavLink } from "react-router-dom";
import ImageGallery from "react-image-gallery";

class About extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (
            !window.confirm(
                "You are leaving jasonyue to visit an external site"
            )
        ) {
            e.preventDefault();
        }
    }

    render() {
        if (document.title !== "Learn About My Journey") {
            document.title = "Learn About My Journey";
        }

        const images = [
            {
                original: code_img,
                thumbnail: code_img
            },
            {
                original: code_img,
                thumbnail: code_img
            }
        ];

        return (
            <div>
                <Panel img={code_img}>
                    <div className="center_content">
                        <span className="center_text white">
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
                        <p className="title center_text">
                            Some fun facts about myself
                        </p>
                        <span className="subtitle p-grid">
                            <ul className="p-col-4-auto">
                                <li>My favorite food is toro sashimi</li>
                                <li>I was not tech savvy until 16</li>
                                <li>
                                    I own a stuffed dolphin that was taller than
                                    me
                                </li>
                            </ul>
                            <ul className="p-col-4-auto">
                                <li>
                                    My dream is to build{" "}
                                    <a
                                        href="https://sakurasounopetnakanojo.fandom.com/wiki/Maid"
                                        style={{ color: "white" }}
                                        onClick={e => this.handleClick(e)}
                                    >
                                        Maid-Chan
                                    </a>
                                </li>
                                <li>
                                    I love playing video games on the PC (Master
                                    Race)
                                </li>
                                <li>I have longer than average hair</li>
                            </ul>
                            <ul className="p-col-4-auto">
                                <li>
                                    My favourite social activity involves escape
                                    rooms
                                </li>
                                <li>I enjoy traveling to various countries</li>
                                <li>I'm not a fan of paper</li>
                            </ul>
                        </span>
                    </div>
                </Panel>
                <div className="gallery">
                    <ImageGallery
                        items={images}
                        lazyLoad={true}
                        autoPlay={true}
                    />
                </div>
                <Panel light={true}>
                    <div className="center_content">
                        <span>
                            <p className="title">
                                Understand who I am as a person
                            </p>
                            <p className="description">
                                I absolutely love algorithms. The process from
                                creating to optimizing an algorithmic solution
                                to a problem is what makes me feel alive. I find
                                that the challenges I encounter as a developer
                                help me grow both my skills and as a person.
                                Both of which are very important to me. Although
                                I focus on full-stack development, I enjoy
                                software development as well, utilizing a
                                variety of languages to create interactable
                                solutions. I'm not afraid to admit that I'm not
                                the best at UI design, web or software. However,
                                no matter how long it takes, I believe I can
                                learn to create unique and innovative UIs in the
                                future.
                            </p>
                            <p className="description">
                                When I decide to take a break, relax, or catch
                                my friends during their spare times, I enjoy
                                watching YouTube videos or playing video games.
                                Some games I'm passionate about (or just play a
                                lot) include Osu, Apex Legends, Nier Automata,
                                Terraria, and all sorts of other genres of games
                                including VR games (I own an HTC Vive). I spend
                                the majority of my time behind a computer
                                screen, but when I decide to go out, I often
                                hang out with friends, whether it's at a
                                restaurant, a shopping mall (Metrotown), or one
                                of their homes. I also enjoy traveling (whenever
                                I get the chance). Some notable locations that
                                I've been to include Japan, Hawaii, Cuba, and
                                others. To stimulate my thinking, I also enjoy
                                activities such as escape rooms.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span>
                            <p className="title">Learn about my passions</p>
                            <p className="description">
                                The road that I've paved for myself isn't as
                                straight as others. While I'm currently focusing
                                on growing my skills as a full-stack developer,
                                I occasionally take a dive into software
                                development.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel light={true}>
                    <div className="center_content">
                        <span className="center_text">
                            <p className="title">
                                A look into the past and present
                            </p>
                            <p className="description">
                                Feel free to explore the skills and
                                accomplishments that I've obtained over the
                                years. Please understand that the size and depth
                                of each is influenced by time and experience (as
                                a recent graduate, I try my best).
                            </p>
                            <div
                                className="pseudo_button center_content custom_button"
                                style={{
                                    width: "200px",
                                    marginBottom: "3em"
                                }}
                            >
                                <NavLink to="/resume">
                                    <div
                                        style={{
                                            padding: "1em",
                                            marginLeft: "-2em",
                                            color: "white"
                                        }}
                                    >
                                        View My Resume
                                    </div>
                                </NavLink>
                            </div>
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default About;
