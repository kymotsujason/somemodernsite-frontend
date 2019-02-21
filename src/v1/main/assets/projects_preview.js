import tictactoe_img from "../assets/tictactoe.png";
import chat_img from "../assets/chat.png";
import gameoflife_img from "../assets/gameoflife.png";

export const tictactoe_url = "/v1/projects/tic-tac-toe";
export const chat_url = "/v1/projects/chat";
export const gameoflife_url = "/v1/projects/game-of-life";

export const projects_items = {
    "game-of-life": {
        title: "Game Of Life",
        date: "February 5, 2019",
        subtitle: "A cellular automation!",
        description: "A ReactJS implementation of Conways Game of Life.",
        image: gameoflife_img,
        url: gameoflife_url
    },
    chat: {
        title: "Realtime Chat",
        date: "November 29, 2018",
        subtitle: "A Realtime chat room",
        description:
            "A simple realtime chat room, similar to an IRC. 1 room, shows connected users.",
        image: chat_img,
        url: chat_url
    },
    "tic-tac-toe": {
        title: "Tic-Tac-Toe",
        date: "November 9, 2018",
        subtitle: "The beginning",
        description:
            "A simple interactive tic-tac-toe game featuring singleplayer, vs AI, and multiplayer.",
        image: tictactoe_img,
        url: tictactoe_url
    }
};
