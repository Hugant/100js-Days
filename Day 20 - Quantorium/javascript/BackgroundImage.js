class BackgroundImage {
	constructor(x, y, width, height, background) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.background = background;
	}

	draw(context) {
		this.background.draw(context, this.x, this.y, this.width, this.height);
	}
}