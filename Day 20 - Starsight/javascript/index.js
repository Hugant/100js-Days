let game = null;

const DIMENSIONS = {
	GAME: {
		WIDTH: 512,
		HEIGHT: 512
	}
};

window.onload = function() {
	game = new Game();
	game.init("canvas", DIMENSIONS.GAME.WIDTH, DIMENSIONS.GAME.HEIGHT);
	game.start();
};