class Word {
	constructor(text, x, y, dy, font, align, color) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.dy = dy;
		this.font = font;
		this.align = align;
		this.color = color;
		this.opacity = 1;
		this.color = color;
	}

	move() {
		this.y += this.dy;
		if (this.y > canvas.height * 0.75) {
			this.opacity -= 0.01;
		}
	}

	draw() {
		context.font = this.font;
		context.textAlign = this.align;
		context.fillStyle = "rgba("   + this.color.r +
														", "  + this.color.g +
														", "  + this.color.b +
														", "  + this.opacity +")";
		context.fillText(this.text, this.x, this.y);
	}
}