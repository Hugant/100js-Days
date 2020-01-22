class Levels {
	constructor(spriter, sprites) {
		// this.spriter = spriter;
		// this.sprites = sprites;
		this.levels = [];
		this.currentLevel = 0;
	}

	init(spriteManager) {
		let player = new Player(400, 150, 70, 90, spriteManager.getSprite(CHARACTERS_SPRITE_NAME));
		let enemies = new EnemiesList([
			new Rat(300, 62, 62, 62, spriteManager.getSprite(ENEMY_SPRITE_NAME)),
			// new Bee(0, 124, 62, 62, spriteManager.getSprite(ENEMY_SPRITE_NAME))
		], spriteManager);
		let decoration = [];
		let map = [
			[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, 1, 2, 2, 3, -1, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, -1, 4, 4, 5, -1, -1, -1, -1, -1, -1, -1, 13, 14, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, 1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, 1, -1, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, 11, 12, -1, -1, -1,],
			[-1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1,],
			[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 17, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,],
			// [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
			// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],


		];

		let backgroundImage = spriteManager.getSprite(BACKGROUND_SPRITE_NAME)
			.getObject(BACKGROUNDS.PILL_VALLEY.NAME);

		let background = new Background(map, backgroundImage);

		map = new LevelMap(map, GROUNDS_NAMES.PLANET);

		this.levels.push(new Level("Level 1", background, map,
			null, enemies, player));
		// this.levels.push(new Level(this.spriter, "Level 2", background, map,
		// 	decoration, enemies, player));
		// this.levels.push(new Level(this.spriter, "Level 3", background, map,
		// 	decoration, enemies, player));

		for (let level in this.levels) {
			this.levels[level].init(spriteManager);
		}
	}

	current() {
		return this.levels.slice(this.currentLevel, 1)[0];
	}

	hasNext() {
		return this.currentLevel + 1 < this.levels.length;
	}

	next() {
		return this.levels.slice(++this.currentLevel, 1)[0];
	}
}

