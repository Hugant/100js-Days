const BACKGROUND_SPRITE_NAME = "Background";
const BACKGROUND_SPRITE_SRC = "images/backgrounds.svg";
const BACKGROUND_SECTION_NAME = "backgrounds";

const BACKGROUNDS = {
	SHADOW_VALLEY: {
		NAME: "Shadow valley",
		X: 0,
		Y: 0
	},
	VALLEY: {
		NAME: "Valley",
		X: 0,
		Y: 560
	},
	CACTUS_SHADOW_VALLEY: {
		NAME: "Cactus shadow valley",
		X: 560,
		Y: 0
	},
	CACTUS_VALLEY: {
		NAME: "Cactus valley",
		X: 560,
		Y: 560
	},
	PILL_SHADOW_VALLEY: {
		NAME: "Pill shadow valley",
		X: 1120,
		Y: 0
	},
	PILL_VALLEY: {
		NAME: "Pill valley",
		X: 1120,
		Y: 560
	},
	MUSHROOM_SHADOW_VALLEY: {
		NAME: "Mushroom shadow valley",
		X: 1680,
		Y: 0
	},
	MUSHROOM_VALLEY: {
		NAME: "Mushroom valley",
		X: 1680,
		Y: 560
	}
};

const BACKGROUND_SPRITE = {
	WIDTH: 560,
	HEIGHT: 560
};

class BackgroundSprites {
	constructor(spriter) {
		this.spriter = spriter;
		this.spriteName = BACKGROUND_SPRITE_NAME;
		this.spriteSrc = BACKGROUND_SPRITE_SRC;
		this.spriteSectionName = BACKGROUND_SECTION_NAME;
	}

	init() {
		let sprite = this.spriter.addSprite(this.spriteName, this.spriteSrc);
		let backgroundSection = sprite.createSection(this.spriteSectionName);

		for (let background in BACKGROUNDS) {
			backgroundSection.createObject(sprite.sprite, BACKGROUNDS[background].NAME,
				BACKGROUNDS[background].X, BACKGROUNDS[background].Y,
				BACKGROUND_SPRITE.WIDTH, BACKGROUND_SPRITE.HEIGHT);
		}
	}
}