class Background {
	constructor(map, background) {
		this.map = map;
		this.background = background;
		this.backgrounds = [];
	}

	init() {
		let mapWidth = this.map[0].length * DIMENSIONS.MAP_ELEMENT.WIDTH;
		let numberBackgrounds = Math.ceil(mapWidth / DIMENSIONS.GAME.HEIGHT);

		for (let i = 0; i < numberBackgrounds; i++) {
			this.backgrounds.push(new BackgroundImage(i * DIMENSIONS.GAME.HEIGHT,
				0, DIMENSIONS.GAME.HEIGHT, DIMENSIONS.GAME.HEIGHT, this.background));
		}
	}

	draw(context) {
		for (let background of this.backgrounds) {
			background.draw(context);
		}
	}
}