var canvas;
var context;

var keyboard;

var statusBoard;
var statusBoardParams = {
	x: 0,
	y: 0,
	color: "black",
	fontSize: 24,
	padding: {
		bottom: 4,
		left: 4
	},
	points: 0,
	player: {
		hp: 3,
		srcImage: "images/heart.png",
		hpHeight: 25,
		hpWidth: 25
	}
}

var background;
var backgroundParams = {
	color: "black"
}

var player;
var playerParams = {
	width: 70,
	height: 15,
	speed: 5,
	color: "gray",
	hp: 3
}

var ball;
var ballParams = {
	radius: 10,
	maxSpeedX: 2,
	minSpeedX: 2,
	maxSpeedY: 2,
	minSpeedY: 2,
	color: "white"
}


var blockMap;
levels = [];

levels.push([
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 0, 0, 1, 0, 0, 1, 1],
	[0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 2, 1, 1, 0, 0],
	[0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 0],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[0, 0, 1, 1, 1, 1, 1, 0, 0],
	[0, 1, 1, 1, 1, 1, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[0, 2, 1, 1, 1, 1, 1, 2, 0],
	[0, 0, 2, 1, 1, 1, 2, 0, 0],
	[0, 0, 0, 2, 1, 2, 0, 0, 0],
	[0, 0, 0, 0, 2, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 1, 1, 2, 1, 1, 0, 0],
	[0, 1, 1, 2, 2, 2, 1, 1, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[0, 0, 1, 1, 0, 1, 1, 0, 0],
	[2, 2, 0, 3, 3, 3, 0, 2, 2],
	[0, 2, 2, 2, 0, 2, 2, 2, 0],
	[0, 2, 0, 1, 0, 1, 0, 2, 0],
	[0, 2, 0, 1, 0, 1, 0, 2, 0],
	[0, 2, 0, 1, 0, 1, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 0, 3, 2, 1, 2, 3, 0, 0],
	[0, 0, 0, 2, 1, 2, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[0, 0, 0, 2, 1, 2, 0, 0, 0],
	[0, 0, 0, 2, 1, 2, 0, 0, 0],
	[0, 0, 0, 4, 4, 4, 0, 0, 0],
	[0, 2, 2, 2, 1, 2, 2, 2, 0],
	[3, 3, 3, 0, 0, 0, 3, 3, 3],
	[3, 3, 3, 0, 0, 0, 3, 3, 3],
	[0, 2, 2, 2, 2, 2, 2, 2, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 2, 2, 2, 2, 2, 0, 0],
	[1, 1, 1, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[2, 2, 0, 0, 0, 0, 0, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 3, 3, 3, 0, 0, 0],
	[1, 0, 3, 3, 2, 3, 3, 0, 1],
	[1, 0, 3, 2, 1, 2, 3, 0, 1],
	[1, 0, 3, 2, 1, 2, 3, 0, 1],
	[0, 0, 3, 3, 2, 3, 3, 0, 0],
	[0, 0, 0, 3, 3, 3, 0, 0, 0],
	[2, 2, 0, 0, 0, 0, 0, 2, 2],
	[0, 2, 2, 0, 0, 0, 2, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[0, 4, 4, 0, 4, 0, 4, 4, 0],
	[0, 4, 4, 0, 4, 0, 4, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[3, 3, 0, 3, 3, 3, 0, 3, 3],
	[3, 3, 0, 3, 3, 3, 0, 3, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 2, 2, 0, 2, 0, 2, 2, 2],
	[2, 2, 2, 0, 2, 0, 2, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[1, 0, 0, 1, 1, 1, 0, 0, 1],
	[0, 4, 4, 4, 4, 4, 4, 4, 0],
	[0, 4, 3, 3, 3, 3, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 2, 1, 2, 3, 4, 0],
	[0, 4, 3, 3, 3, 3, 3, 4, 0],
	[0, 4, 4, 4, 4, 4, 4, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 2, 2, 0, 0, 0, 2, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[3, 3, 3, 3, 3, 3, 3, 3, 3],
	[4, 4, 4, 4, 4, 4, 4, 4, 4],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 2, 2, 0, 0, 0, 2, 2, 2],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]]);

levels.push([
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 2, 0, 2, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2],
	[3, 3, 3, 3, 3, 3, 3, 3, 3],
	[3, 3, 3, 3, 3, 3, 3, 3, 3],
	[4, 4, 4, 4, 4, 4, 4, 4, 4],
	[4, 4, 4, 4, 4, 4, 4, 4, 4],
	[5, 5, 5, 5, 5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5, 5, 5, 5, 5]]);


var mapParams = {
	0: {
		width: 0,
		height: 0
	},
	1: {
		hp: 1,
		color: "red"
	},
	2: {
		hp: 2,
		color: "orange"
	},
	3: {
		hp: 3,
		color: "blue"
	},
	4: {
		hp: 4,
		color: "green"
	},
	5: {
		hp: 5,
		color: "azure"
	}
}

var blockParams = {
	width: 70,
	height: 20,
	margin: {
		top: 1,
		bottom: 1,
		right: 1,
		left: 1
	},
	color: "gray"
}

var requestAFid = -1;

window.onload = function() {
	game = new Game(levels);

	game.init();

	game.setEngine(function() {
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.fillStyle = "white";
		context.font = "35px serif";
		context.textAlign = "center";
		context.fillText("Level 1", canvas.width / 2, canvas.height / 2);
	});

	setTimeout(function() {
		game.setMainEngine(function() {
			game.draw();
			player.move();
			ball.move();
			statusBoard.update({
				points: game.points,
				player: {
					hp: player.hp
				}
			});
			statusBoard.draw();

			if (player.isLose()) {
				game.over();

				if (keyboard.isDown("SPACE")) {
					game.restart();
				}
			} else if (blockMap.isEmpty() && game.transition) {
				game.transition = false;
				if (game.currentLevel + 1 < game.levels.length) {
					game.setEngine(function() {
						context.fillStyle = "black";
						context.fillRect(0, 0, canvas.width, canvas.height);
						
						context.fillStyle = "white";
						context.font = "35px serif";
						context.textAlign = "center";
						context.fillText("Level " + (game.currentLevel + 2), canvas.width / 2, canvas.height / 2);
					});

					setTimeout(function() {
						game.nextLevel();
					}, 2000);
				} else {
					game.nextLevel();
				}	
			}
		});
	}, 2000);
	
	start();
}

function start() {
	game.engine()
	requestAFid = window.requestAnimationFrame(start);
}

function stop() {
	cancelAnimationFrame(requestAFid)
}

