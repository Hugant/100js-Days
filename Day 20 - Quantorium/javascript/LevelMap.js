class LevelMap {
	constructor(map, ground) {
		this.map = map;
		this.maxX = 0;
		this.maxY = 0;
		this.ground = ground;
		this.tiles = [];
	}

	init(spriteManager) {
		let location = spriteManager.getSprite(MAP_SPRITE_NAME).getSection(this.ground);

		for (let i in this.map) {
			for (let j in this.map[i]) {
				let tile = TILES[this.map[i][j]];
				if (typeof tile !== 'undefined') {
					this.tiles.push(new Tile(j * DIMENSIONS.MAP_ELEMENT.WIDTH,
							i * DIMENSIONS.MAP_ELEMENT.HEIGHT,
							DIMENSIONS.MAP_ELEMENT.WIDTH, DIMENSIONS.MAP_ELEMENT.HEIGHT,
							location.getObject(tile)));
				}
			}
		}

		this.maxX = this.map[0].length * DIMENSIONS.MAP_ELEMENT.WIDTH;
		this.maxY = this.map.length * DIMENSIONS.MAP_ELEMENT.HEIGHT;
	}

	draw(context) {
		for (let tile of this.tiles) {
			tile.draw(context);
		}
	}
}