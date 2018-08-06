let game = null;

let levels = [];

window.onload = function() {
	game = new Game();
	game.init("canvas", 560, 560);
	game.setLevels(levels);
	game.start();
};
