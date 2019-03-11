import tictactoe_img from "./img/projects/tictactoe-min.jpg";
import chat_img from "./img/projects/chat-min.jpg";
import gameoflife_img from "./img/projects/gameoflife-min.jpg";
import tictactoe_img_1470 from "./img/projects/tictactoe-1470-min.jpg";
import chat_img_1470 from "./img/projects/chat-1470-min.jpg";
import gameoflife_img_1470 from "./img/projects/gameoflife-1470-min.jpg";
import tictactoe_img_992 from "./img/projects/tictactoe-992-min.jpg";
import chat_img_992 from "./img/projects/chat-992-min.jpg";
import gameoflife_img_992 from "./img/projects/gameoflife-992-min.jpg";
import tictactoe_img_768 from "./img/projects/tictactoe-768-min.jpg";
import chat_img_768 from "./img/projects/chat-768-min.jpg";
import gameoflife_img_768 from "./img/projects/gameoflife-768-min.jpg";
export const tictactoe_url = "/projects/tic-tac-toe/";
export const chat_url = "/projects/chat/";
export const gameoflife_url = "/projects/game-of-life/";

export const projectsData = {
    "game-of-life": {
        title: "Conway's Game of Life",
        date: "February 5, 2019",
        description: "A ReactJS implementation of Conway's  Game of Life.",
        img: gameoflife_img,
        img_1470: gameoflife_img_1470,
        img_992: gameoflife_img_992,
        img_768: gameoflife_img_768,
        url: gameoflife_url,
        index: 2
    },
    chat: {
        title: "Realtime Chat",
        date: "November 29, 2018",
        description: "A simple realtime chat room with an online user list.",
        img: chat_img,
        img_1470: chat_img_1470,
        img_992: chat_img_992,
        img_768: chat_img_768,
        url: chat_url,
        index: 1
    },
    "tic-tac-toe": {
        title: "Tic-tac-toe",
        date: "November 9, 2018",
        description:
            "A simple Tic-tac-toe game with singleplayer, multiplayer, and AI modes",
        img: tictactoe_img,
        img_1470: tictactoe_img_1470,
        img_992: tictactoe_img_992,
        img_768: tictactoe_img_768,
        url: tictactoe_url,
        index: 0
    }
};
