class Ball {
	constructor(params) {
		var errors = [];

		this.x = player.x + player.width / 2;
		this.y = player.y - params.radius;
		this.radius = isNaN(params.radius) ? errors.push("Radius is not number") : params.radius;
		this.speedX = Math.random() * (params.maxSpeedX - params.minSpeedX) + params.minSpeedX;
		this.speedY = Math.random() * (params.maxSpeedY - params.minSpeedY) + params.minSpeedY;
		this.color = params.color == null ? errors.push("Color should not be equal null") : params.color;
		this.inMove = false;

		for (var err in errors) {
			throw errors[err];
		}
	}

	draw() {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		context.fill();
		context.closePath();
	}

	move() {
		if (keyboard.isDown("SPACE")) {
			this.inMove = true;
		}

		if (this.inMove) {
			this.x += this.speedX;
			this.y -= this.speedY;

			this.intersectsWithPlayer();
			this.intersectsWithWalls();
			this.intersectsWithBlocks();
		} else {
			this.x = player.x + player.width / 2;
			this.y = player.y - this.radius;
		}
	}

	intersectionX(rect) {
		return this.x >= rect.x + this.speedX && this.x <= rect.x + this.speedX + rect.width;
	}

	intersectionY(rect) {
		return this.y >= rect.y && this.y <= rect.y + rect.height;
	}

	intersectionYWithRadius(rect) {
		return this.y >= rect.y - this.radius && this.y <= rect.y + rect.height + this.radius;
	}

	intersectionXWithRadius(rect) {
		return this.x >= rect.x - this.radius && this.x <= rect.x + rect.width 	+ this.radius;
	}

	intersectionWithRadius(rect) {
		return 	this.intersectionYWithRadius(rect) && this.intersectionXWithRadius(rect);
	}

	intersects(rect) {
		if (this.intersectionX(rect)) {
			if (this.intersectionYWithRadius(rect)) {
				this.speedY = -this.speedY;
				return true;
			}
		} else if (this.intersectionY(rect)) {
			if (this.intersectionXWithRadius(rect)) {
				this.speedX = -this.speedX;
				return true;
			}
		} else if (this.intersectionWithRadius(rect)) {
			if (Math.hypot(this.x - rect.x, this.y - rect.y) <= this.radius) {
				this.speedX = -Math.abs(this.speedX);
				this.speedY = Math.abs(this.speedY);
				return true;
			} else if (Math.hypot(this.x - rect.x - rect.width, this.y - rect.y) <= this.radius) {
				this.speedX =  Math.abs(this.speedX);
				this.speedY = Math.abs(this.speedY);
				return true;
			} else if (Math.hypot(this.x - rect.x - rect.width, this.y - rect.y - rect.height) <= this.radius) {
				this.speedX = Math.abs(this.speedX);
				this.speedY = -Math.abs(this.speedY);
				return true;
			} else if (Math.hypot(this.x - rect.x, this.y - rect.y - rect.height) <= this.radius) {
				this.speedX = -Math.abs(this.speedX);
				this.speedY = -Math.abs(this.speedY);
				return true;
			}
		}

		return false;
	}

	intersectsWithPlayer() {
		if (this.intersects(player)) {
			if (this.speedX > 0 && player.dx > 0) {
				this.speedX += 0.2;
			} else if (this.speedX < 0 && player.dx < 0) {
				this.speedX -= 0.2;
			} else if (this.speedX > 0 && player.dx < 0) {
				this.speedX -= 0.2;
			} else if (this.speedX < 0 && player.dx > 0) {
				this.speedX += 0.2;
			}
			this.speedY += 0.01;
			game.points += 5;
		}
	}

	intersectsWithBlocks() {
		for (var i in blockMap.map) {
			if (this.intersects(blockMap.map[i])) {
				game.points += 10;
				this.speedY += 0.01;
				if (--blockMap.map[i].hp <= 0) {
					blockMap.map.splice(blockMap.map.indexOf(blockMap.map[i]), 1);
				}
			}
		}
	}

	intersectsWithWalls() {
		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.speedX = -this.speedX;
		}

		if (this.y - this.radius <= statusBoard.height) {
			this.speedY = -this.speedY;
		}

		if (this.y + this.radius >= canvas.height) {
			this.speedY = -this.speedY;
			player.hp--;
			this.inMove = false;
		}
	}
}