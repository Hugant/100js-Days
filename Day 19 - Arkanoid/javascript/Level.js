class Level {
	constructor() {
		this.previewText = "";
		this.blockMap = param.blockMap;
	}

	draw() {
		this.blockMap.draw();
	}
}