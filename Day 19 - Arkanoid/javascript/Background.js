class Background {
	constructor(params) {
		var errors = [];

		this.x = 0;
		this.y = 0;
		this.width = isNaN(params.width) ? canvas.width : params.width;
		this.height = isNaN(params.height) ? canvas.height : params.height;
		this.color = params.color == null ? errors.push("Color should not be equal null") : params.color;

		for (var err in errors) {
			throw errors[err];
		}
	}

	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}