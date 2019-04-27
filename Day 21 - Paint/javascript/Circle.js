class Circle {
	constructor(context, x, y, fillColor, strokeColor) {
		this.context = context;
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;
		this.radiusX = 0;
		this.radiusY = 0;
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
	}

	update(x, y) {
		this.x = this.startX + (x - this.startX) / 2;
		this.y = this.startY + (y - this.startY) / 2;
		this.radiusX = Math.abs((x - this.startX) / 2);
		this.radiusY = Math.abs((y - this.startY) / 2);
	}

	draw() {
		this.context.fillStyle = this.fillColor;
		this.context.strokeStyle = this.strokeColor;
		this.context.beginPath();
		this.context.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI, true);
		this.context.fill();
		this.context.stroke();
		this.context.closePath();
	}
}