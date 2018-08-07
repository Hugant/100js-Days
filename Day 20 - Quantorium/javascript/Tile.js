class Tile {
	constructor(x, y, width, height, object) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.hitboxes = [];
		this.object = object;
	}

	draw(context) {
		this.object.draw(context, this.x, this.y, this.width, this.height);
	}
}