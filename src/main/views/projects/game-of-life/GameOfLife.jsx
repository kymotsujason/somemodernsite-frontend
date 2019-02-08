import React, { Component } from "react";
import Typist from "react-typist";
import Card from "../../../../generic_components//components/Card";
import Game from "./Game";

class GameOfLife extends Component {
    render() {
        return (
            <div className="spacing main_container">
                <Card className="g-col-6 center_text">
                    <Typist
                        className="typist"
                        avgTypingSpeed={50}
                        startDelay={300}
                    >
                        <span>Game Of Life</span>
                    </Typist>
                </Card>
                <br />
                <Card className="g-col-6 center_text">
                    <Game />
                </Card>
            </div>
        );
    }
}

export default GameOfLife;
