class Curve {
	constructor(context, x, y, strokeColor) {
		this.context = context;
		this.dots = [{x: x, y: y}]
		this.strokeColor = strokeColor;
	}

	update(x, y) {
		this.dots.push({x: x, y: y});
	}

	draw() {
		this.context.strokeStyle = this.strokeColor;
		this.context.beginPath();
		for (let i = 0; i < this.dots.length - 1; i++) {
			this.context.moveTo(this.dots[i].x, this.dots[i].y);
			this.context.lineTo(this.dots[i + 1].x, this.dots[i + 1].y);
		}

		this.context.stroke();
		this.context.closePath();
	}
}