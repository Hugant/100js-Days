class EnemiesList {
	constructor(enemies, sprite) {
		this.sprite = sprite;
		this.enemies = enemies;
	}

	init() {}

	draw(context) {
		for (let enemy in this.enemies) {
			this.enemies[enemy].draw(context);
		}
	}

	move(keyboard, tiles) {
		for (let enemy in this.enemies) {
			this.enemies[enemy].move(keyboard, tiles);
		}
	}
}