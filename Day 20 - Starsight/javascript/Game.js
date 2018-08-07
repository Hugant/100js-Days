class Game {
	constructor() {
		this.canvas = null;
		this.context = null;

		this.keyboard = new Keyboard();

		this.player = null;

		this.levels = null;
		this.level = null;

		this.mainEngine = null;
	}

	init(canvasId, width, height) {
		this.canvas = document.getElementById(canvasId);
		this.context = this.canvas.getContext("2d");
		this.canvas.width = width;
		this.canvas.height = height;

		this.keyboard.create();

		this.player = new Player();

		this.levels.init();
		this.level = this.levels.current();
	}

	start() {
		game.engine();
		window.requestAnimationFrame(game.start);
	}

	nextLevel() {
		if (this.levels.hasNext()) {
			this.level = this.levels.next();
		} else {
			this.win();
		}
	}

	win() {
		this.setEngine(function() {
			console.log("You win");
		});
	}

	over() {
		this.setEngine(function() {
			console.log("Game over");
		});
	}

	setEngine(engine) {
		if (typeof engine === "function") {
			this.mainEngine = engine;
			this.engine = engine;
		}
	}

	engine() {
		this.level.move(this.keyboard);
		this.level.draw(this.context);

		if (this.level.passed()) {
			this.nextLevel();
		} else if (this.level.over()) {
			this.over();
		}
	}
}