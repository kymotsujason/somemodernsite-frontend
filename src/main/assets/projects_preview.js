import tictactoe_img from '../assets/tictactoe.png';
import chat_img from '../assets/chat.png';
import twozerofoureight_img from '../assets/placeholder.png';

export const tictactoe_url = "/projects/tic-tac-toe";
export const chat_url = '/projects/chat'
export const twozerofoureight_url = '/projects/2048'

export const projects_items = {
	'2048': {
		title: '2048',
		date: 'February 4, 2019',
		subtitle: 'Get to 2048!',
		description: 'A ReactJS implementation of 2048.',
		image: twozerofoureight_img,
		url: twozerofoureight_url,
	},
	'chat': {
		title: 'Realtime Chat',
		date: 'November 29, 2018',
		subtitle: 'A Realtime chat room',
		description: 'A simple realtime chat room, similar to an IRC. 1 room, shows connected users.',
		image: chat_img,
		url: chat_url,
	},
	'tic-tac-toe': {
		title: 'Tic-Tac-Toe',
		date: 'November 9, 2018',
		subtitle: 'The beginning',
		description: 'A simple interactive tic-tac-toe game featuring singleplayer, vs AI, and multiplayer.',
		image: tictactoe_img,
		url: tictactoe_url,
	},
};