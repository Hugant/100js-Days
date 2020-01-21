const MAP_SPRITE_NAME = "Map";
const MAP_SPRITE_SRC = "images/grass.svg";
const LOCATIONS_SECTION_NAME = "locations";
const IMAGE_SRC_PREFIX = "images/";

const GROUNDS_NAMES = {
	SAND: "sand",
	SNOW: "snow",
	GRASS: "grass",
	PLANET: "planet",
	// DIRT: "dirt",
	// STONE: "stone",
};

const TILES = [
	"tile",
	"left",
	"middle",
	"right",
	"center",
	"left_hill",
	"right_hill",
	"half",
	"left_half",
	"middle_half",
	"right_half",
	"left_alt_cliff",
	"right_alt_cliff",
	"left_cliff",
	"right_cliff",
	"rounded_center",
	"left_corner",
	"right_corner",
];

const BOXES = {
	
};

class MapSprites {
	init(spriteManager) {
		let sprite = spriteManager.addSprite(MAP_SPRITE_NAME, new StaticSprite(MAP_SPRITE_SRC));

		for (let name in GROUNDS_NAMES) {
			let sprite_section = sprite.createSection(GROUNDS_NAMES[name], new ImagesBank());

			for (let tile in TILES) {
				let tileName = TILES[tile];
				let imageSrc = IMAGE_SRC_PREFIX + GROUNDS_NAMES[name] + "/" + TILES[tile] + ".png";
				sprite_section.createObject(tileName, imageSrc);
			}
		}



		// let locationsSection = sprite.createSection(this.spriteSectionName);
		//
		// let groundSection = locationsSection.createSection("sand");
		// let imageSrcMiddle = "sand" + "_";
		//
		// let image = new Image();
		// image.src = IMAGE_SRC_PREFIX + imageSrcMiddle + "tile.png";
		// groundSection.createObject(sprite.sprite, imageSrcMiddle + "tile", image, TILE.WIDTH, TILE.HEIGHT);

		// for (let name of GROUNDS_NAMES) {
		// 	let groundSection = locationsSection.createSection(name);
		// 	let imageSrcMiddle = name + "_";
		//
		// 	for (let tile of TILES) {
		// 		let image = new Image();
		// 		image.src = IMAGE_SRC_PREFIX + imageSrcMiddle + tile;
		// 		groundSection.createObject(imageSrcMiddle + tile, image, TILE.WIDTH, TILE.HEIGHT);
		// 	}
		// }

		// for (let ground in GROUNDS) {
		// 	let groundSection = locationsSection.createSection(GROUNDS[ground].NAME);
		//
		// 	for (let tile in TILES) {
		// 		groundSection.createObject(sprite.sprite, TILES[tile].NAME,
		// 			TILES[tile].X * TILE.WIDTH,
		// 			TILE.HEIGHT * GROUNDS[ground].INDEX,
		// 			TILE.WIDTH, TILE.HEIGHT);
		// 	}
		// }
	}
}