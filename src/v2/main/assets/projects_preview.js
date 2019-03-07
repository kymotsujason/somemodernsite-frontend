import tictactoe_img from "./tictactoe.jpg";
import chat_img from "./chat.jpg";
import gameoflife_img from "./gameoflife.jpg";

export const tictactoe_url = "/projects/tic-tac-toe/";
export const chat_url = "/projects/chat/";
export const gameoflife_url = "/projects/game-of-life/";

export const projectsData = {
    "game-of-life": {
        title: "Conway's Game of Life",
        date: "February 5, 2019",
        description: "A ReactJS implementation of Conway's  Game of Life.",
        img: gameoflife_img,
        url: gameoflife_url,
        index: 2
    },
    chat: {
        title: "Realtime Chat",
        date: "November 29, 2018",
        description: "A simple realtime chat room with an online user list.",
        img: chat_img,
        url: chat_url,
        index: 1
    },
    "tic-tac-toe": {
        title: "Tic-tac-toe",
        date: "November 9, 2018",
        description:
            "A simple Tic-tac-toe game with singleplayer, multiplayer, and AI modes",
        img: tictactoe_img,
        url: tictactoe_url,
        index: 0
    }
};
