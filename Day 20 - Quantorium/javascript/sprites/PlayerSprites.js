const CHARACTERS_SPRITE_SRC = "images/characters.svg";
const CHARACTERS_SPRITE_NAME = "Player characters";

const CHARACTERS = {
	GREEN: 	0,
	BLUE: 	1,
	PINK: 	2,
	YELLOW: 3,
	BEIGE: 	4
};

const MOTIONS = {
	FRONT: {
		NAME: "front",
		STEPS: [0]
	},
	STAND: {
		NAME: "stand",
		STEPS:[1]
	},
	JUMP: {
		NAME: "jump",
		STEPS: [2]
	},
	DUCK: {
		NAME: "duck",
		STEPS: [3]
	},
	HIT: {
		NAME: "hit",
		STEPS: [4]
	},
	WALK: {
		NAME: "walk",
		STEPS: [5, 6]
	},
	CLIMB: {
		NAME: "climb",
		STEPS: [7, 8]
	},
	SWIM: {
		NAME: "swim",
		STEPS: [9, 10]
	},
};

const SPRITE = {
	WIDTH: 70,
	HEIGHT: 90
};

class PlayerSprites {
	init(spriteManager) {
		let sprite = spriteManager.addSprite(CHARACTERS_SPRITE_NAME,
				new AnimationSprite(CHARACTERS_SPRITE_SRC));

		for (let character in CHARACTERS) {
			let animationObject = sprite.createObject(CHARACTERS[character]);
			animationObject.params["time"] = Date.now();

			for (let motion in MOTIONS) {
				let spriteSteps = [];
				let reverseSpriteSteps = [];

				for (let step in MOTIONS[motion].STEPS) {
					spriteSteps.push(new StaticObject(animationObject.image,
						MOTIONS[motion].STEPS[step] * SPRITE.WIDTH,
						CHARACTERS[character] * SPRITE.HEIGHT * 2,
						SPRITE.WIDTH, SPRITE.HEIGHT));

					reverseSpriteSteps.push(new StaticObject(animationObject.image,
						MOTIONS[motion].STEPS[step] * SPRITE.WIDTH,
						CHARACTERS[character] * SPRITE.HEIGHT * 2 + SPRITE.HEIGHT,
						SPRITE.WIDTH, SPRITE.HEIGHT));
				}

				animationObject.addMotion(motion.toLowerCase(), spriteSteps,
					function(params) {
						if (Date.now() - params.time > 150) {
							params.time = Date.now();
							return true;
						}
						return false;
					});

				animationObject.addMotion("reverse-" + motion.toLowerCase(),
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
}