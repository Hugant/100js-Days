const CHARACTERS_SPRITE_SRC = "images/characters.svg";
const CHARACTERS_SPRITE_NAME = "Player characters";

const CHARACTERS = {
	GREEN: 	0,
	BLUE: 	1,
	PINK: 	2,
	YELLOW: 3,
	BEIGE: 	4
}

const MOTIONS = {
	FRONT: [0],
	STAND: [1],
	JUMP:  [2],
	DUCK:  [3],
	HIT: 	 [4],
	WALK:  [5, 6],
	CLIMB: [7, 8],
	SWIM:  [9, 10]
}

const SPRITE = {
	WIDTH: 70,
	HEIGHT: 90
}

class PlayerSprites {
	constructor(spriter) {
		this.spriter = spriter;
		this.spriteName = CHARACTERS_SPRITE_NAME;
		this.spriteSrc = CHARACTERS_SPRITE_SRC;
	}

	init() {
		let sprite = this.spriter.addSprite(this.spriteName, this.spriteSrc);

		for (let character in CHARACTERS) {
			let spriteCharacter = sprite.createCharacter(CHARACTERS[character]);
			spriteCharacter.params["time"] = Date.now();

			for (let motion in MOTIONS) {
				let spriteSteps = [];
				let reverseSpriteSteps = [];

				for (let step in MOTIONS[motion]) {
					spriteSteps.push(new SpriteObject(sprite.sprite,
						MOTIONS[motion][step] * SPRITE.WIDTH,
						CHARACTERS[character] * SPRITE.HEIGHT * 2,
						SPRITE.WIDTH, SPRITE.HEIGHT));

					reverseSpriteSteps.push(new SpriteObject(sprite.sprite,
						MOTIONS[motion][step] * SPRITE.WIDTH,
						CHARACTERS[character] * SPRITE.HEIGHT * 2 + SPRITE.HEIGHT,
						SPRITE.WIDTH, SPRITE.HEIGHT));
				}

				spriteCharacter.addMotion(motion.toLowerCase(), spriteSteps,
					function(params) {
						if (Date.now() - params.time > 150) {
							params.time = Date.now();
							return true;
						}

						return false;
					});

				spriteCharacter.addMotion("reverse-" + motion.toLowerCase(),
					reverseSpriteSteps, function(params) {
						if (Date.now() - params.time > 150) {
							params.time = Date.now();
							return true;
						}

						return false;
					});
			}
		}
	}

	getCharacter(character) {
		return this.spriter.getSprite(this.spriteName).getCharacter(character);
	}
}