class Eraser {
	constructor() {

	}

	update() {

	}

	draw() {

	}

	static preDraw(context, x, y, radius, fill, stroke) {
		console.log(1)
		context.fillStyle = fill;
		context.strokeStyle = stroke;
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, true);
		context.fill();
		context.stroke();
		context.closePath();
	}
}