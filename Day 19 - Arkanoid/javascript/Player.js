class Player {
	constructor(params) {
		var errors = [];

		this.x = canvas.width / 2 - params.width / 2;
		this.y = canvas.height - 60;
		this.dx = 0;
		this.dy = 0;
		this.hp = isNaN(params.hp) ? errors.push("HP is not number") : params.hp;
		this.width = isNaN(params.width) ? errors.push("Width is not number") : params.width;
		this.height = isNaN(params.height) ? errors.push("Height is not number") : params.height;
		this.speed = isNaN(params.speed) ? errors.push("Speed is not number") : params.speed;
		this.color = params.color == null ? errors.push("Color should not be equal null") : params.color;

		for (var err in errors) {
			throw errors[err];
		}
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	move() {
		if (keyboard.isDown("LEFT")) {
			if (this.x > 0) {
				this.dx = -this.speed;
			} else {
				this.dx = 0;
			}
		} else if (keyboard.isDown("RIGHT")) {
			if (this.x + this.width < canvas.width) {
				this.dx = this.speed;
			} else {
				this.dx = 0;
			}
		} else {
			this.dx = 0;
		}

		this.x += this.dx;
	}

	isLose() {
		return this.hp <= 0;
	}
}