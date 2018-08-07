class LevelMap {
	constructor(spriter, map, ground) {
		this.spriter = spriter;
		this.map = map;
		this.ground = ground;
		this.tiles = [];
		this.image = new Image();
		this.image.src = "images/tiles.svg"
	}

	init() {
		let location = this.spriter.getSprite(MAP_SPRITE_NAME)
			.getSection(LOCATIONS_SECTION_NAME)
			.getSection(this.ground.NAME);

		for (let i in this.map) {
			for (let j in this.map[i]) {
				if (this.map[i][j] === -1) {
					continue;
				}

				this.tiles.push(new Tile(j * TILE.WIDTH, i * TILE.HEIGHT,
					TILE.WIDTH, TILE.HEIGHT,
					location.getObject(TILES[this.map[i][j]].NAME)));
			}
		}
	}

	draw(context) {
		for (let tile in this.tiles) {
			context.drawImage(this.image, 0, 0, 70, 70, this.tiles[tile].x, this.tiles[tile].y, 70, 70);
		}
	}
}