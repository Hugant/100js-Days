const MAP_SPRITE_NAME = "LevelMap";
const MAP_SPRITE_SRC = "images/tiles.svg";
const LOCATIONS_SECTION_NAME = "locations";

const GROUNDS = {
	SAND: {
		INDEX: 0,
		NAME: "Sand"
	},
	SNOW: {
		INDEX: 1,
		NAME: "Snow"
	},
	GRASS: {
		INDEX: 2,
		NAME: "Grass"
	},
	PLANET: {
		INDEX: 3,
		NAME: "Planet"
	},
	DIRT: {
		INDEX: 4,
		NAME: "Dirt"
	},
	STONE: {
		INDEX: 5,
		NAME: "Stone"
	},
}

const TILES = {
	0: {
		NAME: "Tile",
		X: 0
	},
	1: {
		NAME: "Left tile",
		X: 1
	},
	2: {
		NAME: "Middle tile",
		X: 2
	},
	3: {
		NAME: "Right tile",
		X: 3
	},
	4: {
		NAME: "Center tile",
		X: 4
	},
	5: {
		NAME: "Left hill tile",
		X: 5
	},
	6: {
		NAME: "Right hill tile",
		X: 6
	},
	7: {
		NAME: "Half tile",
		X: 7
	},
	8: {
		NAME: "Left half tile",
		X: 8
	},
	9: {
		NAME: "Middle half tile",
		X: 9
	},
	10: {
		NAME: "Right half tile",
		X: 10
	},
	11: {
		NAME: "Left alt cliff tile",
		X: 11
	},
	12: {
		NAME: "Right alt cliff tile",
		X: 12
	},
	13: {
		NAME: "Left cliff tile",
		X: 13
	},
	14: {
		NAME: "Right cliff tile",
		X: 14
	},
	15: {
		NAME: "Rounded center tile",
		X: 15
	},
	16: {
		NAME: "Left corner tile",
		X: 16
	},
	17: {
		NAME: "Right corner tile",
		X: 17
	}
}

const TILE = {
	WIDTH: 70,
	HEIGHT: 70
}

class MapSprites {
	constructor(spriter) {
		this.spriter = spriter;
		this.spriteName = MAP_SPRITE_NAME;
		this.spriteSrc = MAP_SPRITE_SRC;
		this.spriteSectionName = LOCATIONS_SECTION_NAME;
	}

	init() {
		let sprite = this.spriter.addSprite(this.spriteName, this.spriteSrc);
		let locationsSection = sprite.createSection(this.spriteSectionName);

		for (let ground in GROUNDS) {
			let groundSection = locationsSection.createSection(GROUNDS[ground].NAME);

			for (let tile in TILES) {
				groundSection.createObject(sprite.sprite, TILES[tile].NAME, 
					TILES[tile].X * TILE.WIDTH, 
					TILE.HEIGHT * GROUNDS[ground].INDEX,
					TILE.WIDTH, TILE.HEIGHT);
			}
		}
	}
}