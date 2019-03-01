import React, { Component } from "react";
import Panel from "../../generic_components/components/Panel";
import about_img from "../assets/about.jpg";
import cuba_img from "../assets/cuba.jpg";
import food_img from "../assets/food.jpg";
import hawaii_img from "../assets/hawaii.jpg";
import japan_img from "../assets/japan.jpg";
import music_img from "../assets/music.jpg";
import tech_img from "../assets/tech.jpg";
import StylizedButton from "../../generic_components/components/StylizedButton";
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
                original: cuba_img,
                thumbnail: cuba_img
            },
            {
                original: food_img,
                thumbnail: food_img
            },
            {
                original: hawaii_img,
                thumbnail: hawaii_img
            },
            {
                original: japan_img,
                thumbnail: japan_img
            },
            {
                original: music_img,
                thumbnail: music_img
            },
            {
                original: tech_img,
                thumbnail: tech_img
            }
        ];

        return (
            <div>
                <Panel img={about_img}>
                    <div className="center_content">
                        <span className="center_text white">
                            <p className="subheader">
                                Discover and learn about who I am
                            </p>
                            <p
                                className="header"
                                style={{ marginBottom: "0.5em" }}
                            >
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
                                <li>I became a tech enthusiast at 16</li>
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
                            <p
                                className="description"
                                style={{ marginBottom: "2.5em" }}
                            >
                                When I decide to take a break, relax, or catch
                                my friends during their spare times, I enjoy
                                watching YouTube videos, anime, reading manga,
                                or playing video games. Some games I'm
                                passionate about (or just play a lot) include
                                Osu, Apex Legends, Nier Automata, Terraria, and
                                all sorts of other genres of games including VR
                                games (I own an HTC Vive). I spend the majority
                                of my time behind a computer screen, but when I
                                decide to go out, I often hang out with friends,
                                whether it's at a restaurant, a shopping mall
                                (Metrotown), or one of their homes. I also enjoy
                                traveling (whenever I get the chance). Some
                                notable locations that I've been to include
                                Japan, Hawaii, Cuba, and others. I'm a big fan
                                of escape rooms.
                            </p>
                        </span>
                    </div>
                </Panel>
                <Panel>
                    <div className="center_content">
                        <span>
                            <p className="title">Learn about my passions</p>
                            <p className="description">
                                I would call myself a tech enthusiast. I love
                                technology and always keep up to date with the
                                latest innovations and newest products. New
                                computer hardware, computer peripherals, mobile
                                devices, programming concepts, programming
                                languages, you get the point. When it comes to
                                programming, the road that I've paved for myself
                                isn't as straight as others. While I'm currently
                                focusing on growing my skills as a full-stack
                                developer, I occasionally take a dive into
                                software development. As someone who loves
                                algorithms, I don't see a reason not to dip my
                                feet into both software and web development.
                            </p>
                            <p
                                className="description"
                                style={{ marginBottom: "2.5em" }}
                            >
                                Gaming is a large part of my life. I've played
                                video games from when I was in elementary school
                                and still play even now. I also watch anime,
                                though not as much as I used to. While I've
                                watched hundreds of different anime seasons,
                                I've read thousands of manga.
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
                            <StylizedButton
                                width="200px"
                                text="View My Resume"
                                url="/resume"
                            />
                        </span>
                    </div>
                </Panel>
            </div>
        );
    }
}

export default About;
