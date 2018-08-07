let game = null;

const DIMENSIONS = {
	GAME: {
		WIDTH: 1024,
		HEIGHT: 560
	},
	PLAYER: {
		WIDTH: 70,
		HEIGHT: 90
	},
	MAP_ELEMENT: {
		WIDTH: 60,
		HEIGHT: 60
	}
};


window.onload = function() {
	game = new Game();
	game.init("canvas", DIMENSIONS.GAME.WIDTH, DIMENSIONS.GAME.HEIGHT);
	game.start();
};
