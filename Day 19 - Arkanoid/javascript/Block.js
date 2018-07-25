class Block {
	constructor(params) {
		var errors = [];

		this.x = isNaN(params.x) ? errors.push("Coordinate x is not number") : params.x;
		this.y = isNaN(params.y) ? errors.push("Coordinate y is not number") : params.y;
		this.dx = 0;
		this.dy = 0;
		this.width = isNaN(params.width) ? errors.push("Width is not number") : params.width;
		this.height = isNaN(params.height) ? errors.push("Height is not number") : params.height;
		this.color = params.color == null ? errors.push("Color should not be equal null") : params.color;
		this.hp = isNaN(params.hp) ? errors.push("Hp should is not number") : params.hp;

		for (var err in errors) {
			throw errors[err];
		}
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}