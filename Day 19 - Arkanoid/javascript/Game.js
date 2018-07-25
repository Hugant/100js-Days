class Game {
	constructor(levels) {
		this.levels = levels;
		this.points = 0;
		this.currentLevel = 0;
		this.mainEngine = null;
		this.transition = true;
	}

	init() {
		canvas = document.getElementById("canvas");
		context = canvas.getContext("2d");

		canvas.width = 656;
		canvas.height = 480;

		statusBoard = new StatusBoard(statusBoardParams);

		background = new Background(backgroundParams);
		blockMap = new BlockMap(this.levels[this.currentLevel], mapParams, blockParams);
		player = new Player(playerParams);
		ball = new Ball(ballParams);

		keyboard = new VirtualKeyboard();
		keyboard.create();
	}

	win() {
		this.setEngine(function() {
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);

			context.fillStyle = "white";
			context.font = "35px serif";
			context.textAlign = "center";
			context.fillText("You win", canvas.width / 2, canvas.height / 2);
			context.fillText("Press 'enter' to restart", canvas.width / 2, canvas.height / 2 + 40);
			context.fillText("Your score: " + this.points, canvas.width / 2, canvas.height / 2 + 80);

			if (keyboard.isDown("ENTER")) {
				this.restart();		
			}
		});
	}

	over() {
		this.setEngine(function() {
			context.fillStyle = "black";
			context.fillRect(0, 0, canvas.width, canvas.height);
			
			context.fillStyle = "white";
			context.font = "35px serif";
			context.textAlign = "center";
			context.fillText("You lose", canvas.width / 2, canvas.height / 2);
			context.fillText("Press 'enter' to restart", canvas.width / 2, canvas.height / 2 + 40);

			if (keyboard.isDown("ENTER")) {
				this.restart();
			}
		});
	}

	nextLevel() {
		this.transition = true;
		if (++this.currentLevel >= this.levels.length) {
			this.win();
		} else {
			this.points += 100;
			if (player.hp < 5) {
				player.hp++;
			}

			blockMap = new BlockMap(this.levels[this.currentLevel], mapParams, blockParams);
			ball = new Ball(ballParams);
		}

		this.setEngine(this.mainEngine);
	}

	restart() {
		this.currentLevel = 0;
		this.points = 0;

		blockMap = new BlockMap(this.levels[this.currentLevel], mapParams, blockParams);
		player = new Player(playerParams);
		ball = new Ball(ballParams);

		this.setEngine(this.mainEngine);
	}

	draw() {
		// this.clear();
		background.draw();
		blockMap.draw();
		player.draw();
		ball.draw();
	}

	clear() {
		context.save();
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.restore();	
	}

	engine() {
		console.log("Engine is not initialized");
	}

	setEngine(game) {
		if (typeof game == "function") {
			this.engine = game;	
		}
	}

	setMainEngine(game) {
		if (typeof game == "function") {
			this.mainEngine = game;
			this.engine = game;	
		}
	}
}