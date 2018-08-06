class Levels {
	constructor(spriter, sprites) {
		this.spriter = spriter;
		this.sprites = sprites;
		this.levels = [];
		this.currentLevel = 0;
	}

	init() {
		let player = new Player(0, 0, 70, 90, this.sprites.player);
		let enemies = new EnemiesList([
			new Rat(0, 62, 62, 62, this.sprites.enemies),
			new Bee(0, 124, 62, 62, this.sprites.enemies)
		], this.sprites.enemies);
		let decoration = [];
		let map = [
			[],
			[]
		];
		let background = new Background(map, BACKGROUNDS.SHADOW_VALLEY);

		map = new LevelMap(this.spriter, map, GROUNDS.GRASS);

		this.levels.push(new Level(this.spriter, "Level 1", background, map,
			decoration, enemies, player));
		this.levels.push(new Level(this.spriter, "Level 2", background, map,
			decoration, enemies, player));
		this.levels.push(new Level(this.spriter, "Level 3", background, map,
			decoration, enemies, player));
	}

	current() {
		return this.levels.slice(this.currentLevel, 1);
	}

	hasNext() {
		return this.currentLevel + 1 < this.levels.length;
	}

	next() {
		return this.levels.slice(++this.currentLevel, 1);
	}
}

