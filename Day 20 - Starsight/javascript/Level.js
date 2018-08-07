class Level {
	constructor(player, enemies, meteors) {
		this.player = player;
		this.enemies = enemies;
		this.meteors = meteors;
		this.bullets = [];

		this.powerUps = [];
		this.background = null;
	}

	init() {
		
	}

	passed() {
		return !!this.enemies.length;
	}

	over() {
		return this.player.hp <= 0;
	}

	collision() {
		for (let enemy of this.enemies) {
			this.player.collision(enemy);
		}

		for (let powerUp of this.powerUps) {
			this.player.collision(powerUp);
		}

		for (let meteor of this.meteors) {
			this.player.collision(meteor);
		}

		for (let bullet of this.bullets) {
			for (let enemy of this.enemies) {
				enemy.collision(bullet);
			}

			for (let meteor of this.meteors) {
				meteor.collision(bullet);
			}
		}
	}

	generatePowerUp() {

	}

	move(keyboard) {
		this.collision();

		this.player.move(keyboard, this.bullets);

		for (let enemy of this.enemies) {
			enemy.move();
		}

		for (let meteor of this.meteors) {
			meteor.move();
		}

		for (let bullet of this.bullets) {
			bullet.move();
		}
	}

	draw(context) {
		this.background.draw(context);
		this.player.draw(context);

		for (let enemy of this.enemies) {
			enemy.draw(context);
		}

		for (let meteor of this.meteors) {
			meteor.draw(context);
		}

		for (let bullet of this.bullets) {
			bullet.draw(context);
		}

		for (let powerUp of this.powerUps) {
			powerUp.draw(context);
		}
	}
}