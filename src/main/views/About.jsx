import React, { Component } from "react";
import Card from "../../generic_components//components/Card";
import Typist from "react-typist";

class About extends Component {
    render() {
        return (
            <div className="spacing main_container">
                <Card className="g-col-6 center_text">
                    <Typist
                        className="typist"
                        avgTypingSpeed={50}
                        startDelay={300}
                    >
                        <span>About</span>
                    </Typist>
                </Card>
                <br />
                <Card title="About me" className="g-col-6">
                    <div>
                        <p>
                            I'm a recent graduate at Trinity Western University
                            with a Computer Science degree. I enjoy programming,
                            gaming, and eating.
                        </p>
                        <h4>Programming</h4>
                        <p>
                            In software development, I generally try to use C++,
                            but I'm comfortable with C# and Java. Though I
                            haven't used it often, I'm starting to use Python a
                            lot more now.
                        </p>
                        <p>
                            When it comes to web development, I used to use PHP.
                            However, I've started using Python and JavaScript to
                            create more interactive and fluid pages.
                        </p>
                        <h4>Gaming</h4>
                        <p>
                            My favorite game to play is Osu, but I also play
                            games such as MapleStory 2, League of Legends, and
                            others. I used to "play" Minecraft, though it was
                            mostly server administration and management
                            (probably for 3 years) for multiple servers (longest
                            time spent on a large-ish server for a Youtuber,
                            15000+ unique visitors before I left). I'm more of a
                            semi-competitive gamer, but I like to play it casual
                            whenever I can (only because I lack talent for
                            competitive =P).
                        </p>
                        <h4>Eating</h4>
                        <p>
                            I love eating sushi. When I say sushi, I mean all
                            the different ways it is served: sashimi, nigiri,
                            rolls, cones, etc. I also like Ramen and ate it
                            pretty much all the time in University. I really
                            don't have much of a preference. Chinese food,
                            Japanese food, Korean food, Chipotle, American food,
                            they're all great!
                        </p>
                    </div>
                </Card>
                <br />
                <Card title="About the site" className="g-col-6">
                    <div>
                        <p>Interested in the site design?</p>
                        <p>
                            I'm using React as my frontend to make everything
                            look sleek and appealing to the eye (hopefully).
                            Django is the backend server, serving the React
                            files and doing all your usual backend activities.
                            The site is hosted on AWS with content being served
                            from Amazon RDBMS (PostgreSQL). AWS Redis is used
                            for fast communication between internal services.
                        </p>
                        <p>
                            The site used to use a simple gradient as a
                            temporary background. However, now it is using
                            something called Trianglify, which generates polygon
                            triangles. The current color theme is bright and
                            colorful with glass-like cards (or windows).
                        </p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default About;
