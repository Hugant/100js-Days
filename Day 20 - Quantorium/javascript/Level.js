class Level {
	constructor(spriter, previewText, background, map,
		decoration, enemies, player) {
		this.previewText = previewText;
		this.background = background;
		this.map = map;
		this.decoration = decoration;
		this.enemies = enemies;
		this.player = player;
	}

	init() {
		this.background.init();
		this.map.init();
		// this.decoration.init();
	}

	preview(context) {
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.fillStyle = "white";
		context.font = "35px serif";
		context.textAlign = "center";
		context.fillText(this.previewText, canvas.width / 2, canvas.height / 2);
	}

	over() {
		return this.player.hp <= 0;
	}

	passed() {
		return !!this.player.exited();
	}

	draw(context) {
		this.background.draw(context);
		this.map.draw(context);

		this.enemies.draw(context);

		for (let thing in this.decoration) {
			this.decoration[thing].draw(context);
		}

		this.player.draw(context);
	}

	move(keyboard) {
		this.enemies.move(keyboard);
		this.player.move(keyboard);
	}
}