class Eraser {
	constructor(context, x, y, radius, fillColor) {
		this.context = context;
		this.dots = [{x: x, y: y}];
		this.radius = radius;
		this.fillColor = fillColor;
	}

	update(x, y) {
		this.dots.push({x: x, y: y});
	}

	draw() {
		this.context.fillStyle = this.fillColor;
		this.context.beginPath();
		for (let i = 0; i < this.dots.length - 1; i++) {
			context.moveTo(this.dots[i].x, this.dots[i].y);
			context.arc(this.dots[i].x, this.dots[i].y, this.radius, 0, 2 * Math.PI, true);
		}
		this.context.fill();
		this.context.closePath();
	}
}