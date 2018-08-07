class Game {
	constructor() {
		this.canvas = null;
		this.context = null;
		this.spriter = null;
		this.sprites = {};
		this.keyboard = null;

		this.levels = null;

		this.mainEngine = function() {
			console.log("Main engine has't been initialized.");
		};
	}

	setLevels(levels) {
		this.levels = levels;
		this.level = levels.slice(0, 1);
	}

	init(id, width, height) {
		this.canvas = document.getElementById(id);
		this.canvas.width = width;
		this.canvas.height = height;
		this.context = this.canvas.getContext("2d");

		this.spriter = new Spriter();

		this.keyboard = new VirtualKeyboard();
		this.keyboard.create();

		this.sprites["enemies"] = new EnemiesSprites(this.spriter);
		this.sprites["player"] = new PlayerSprites(this.spriter);
		this.sprites["map"] = new MapSprites(this.spriter);
		this.sprites["background"] = new BackgroundSprites(this.spriter);

		for (let sprite in this.sprites) {
			this.sprites[sprite].init();
		}

		this.levels = new Levels(this.spriter, this.sprites);
		this.levels.init();
		this.level = this.levels.current();


		// TODO: Remove this comments
		// let map = [
		// 	[-1, -1, -1, -1],
		// 	[1, 2, 2, 3]];

		// this.level = new Level(this.spriter, map, GROUNDS.GRASS);
		// this.level.init();

		// this.player = new Player(0, 0, 70, 90, playerSprite);

		// this.enemies.push(new Rat(0, 62, 62, 62, enemiesSprite));
		// this.enemies.push(new Bee(0, 124, 62, 62, enemiesSprite));
		// this.enemies.push(new Fly(0, 186, 62, 62, enemiesSprite));
		// this.enemies.push(new GreenFish(0, 248, 62, 62, enemiesSprite));
		// this.enemies.push(new PinkFish(0, 310, 62, 62, enemiesSprite));
		// this.enemies.push(new Frog(82, 62, 62, 62, enemiesSprite));
		// this.enemies.push(new Ladybug(82, 124, 62, 62, enemiesSprite));
		// this.enemies.push(new GreenSlime(82, 186, 62, 62, enemiesSprite));
		// this.enemies.push(new BlueSlime( 82, 248, 62, 62, enemiesSprite));
		// this.enemies.push(new PurpleSlime( 82, 310, 62, 62, enemiesSprite));
		// this.enemies.push(new SlimeBlock( 152, 62, 62, 62, enemiesSprite));
		// this.enemies.push(new Snail(152, 124, 62, 62, enemiesSprite));
		// this.enemies.push(new GreenWorm( 152, 186, 62, 62, enemiesSprite));
		// this.enemies.push(new PinkWorm( 152, 248, 62, 62, enemiesSprite));
		// this.enemies.push(new Saw( 200, 300, 62, 62, enemiesSprite));
		// this.enemies.push(new HalfSaw( 300, 300, 62, 62, enemiesSprite));
		// this.enemies.push(new Barnacle(300, 200, 62, 62, enemiesSprite));
	}

	start() {
		game.engine();
		window.requestAnimationFrame(game.start);	
	}

	nextLevel() {
		if (this.levels.hasNext()) {
			this.level = this.levels.next();

			let start = Date.now();
			let timePreview = 3000;

			this.setEngine(function() {
				if (Date.now() - start >= timePreview) {
					game.setEngine(game.mainEngine);
				} else {
					this.level.preview(this.context);
				}
			});
		} else {
			this.passed();
		}
	}

	restartLevel() {
		this.level = this.levels.current();
	}

	passed() {
		this.setEngine(function() {
			console.log("You win");
		});
	}

	setEngine(engine) {
		if (typeof engine === "function") {
			this.mainEngine = this.engine;
			this.engine = engine;
		} else {
			throw "Type of engine should be 'function'";
		}
	}

	engine() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.level.move(this.keyboard);
		this.level.draw(this.context);

		if (this.level.passed()) {
			this.nextLevel();
		} else if (this.level.over()) {
			this.restartLevel();
		}
	}
}