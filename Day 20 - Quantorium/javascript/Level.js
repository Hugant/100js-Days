class Level {
	constructor(previewText, background, map,
		decoration, enemies, player) {
		this.previewText = previewText;
		this.background = background;
		this.map = map;
		this.decoration = decoration;
		this.enemies = enemies;
		this.player = player;
	}

	init(spriteManager) {
		this.background.init(spriteManager);
		this.map.init(spriteManager);
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
		context.save();
		context.translate(
				clamp(-this.player.x + canvas.width / 2, -this.map.maxX + canvas.width, 0), 0);
		this.background.draw(context);
		this.map.draw(context);

		this.enemies.draw(context);

		for (let thing in this.decoration) {
			this.decoration[thing].draw(context);
		}


		this.player.draw(context);
		context.restore();
	}

	move(keyboard) {
		this.enemies.move(keyboard, this.map.tiles);
		this.player.move(keyboard, this.map.tiles);
	}
}

function clamp(value, min, max) {
	// console.log(value);
	if (value < min) {
		return min;
	} else if (value > max) {
		return max;
	}

	return value;
}