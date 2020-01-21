const ENEMY_SPRITE_SRC = "images/enemies.svg";
const ENEMY_SPRITE_NAME = "Enemies";

const ANIMATION_TRANSITION = function(params) {
	if (Date.now() - params.time > 150) {
		params.time = Date.now();
		return true;
	}

	return false;
};

const CREATURES = {
	RAT: {
		NAME: "Rat",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 248, Y: 0, WIDTH: 62, HEIGHT: 62 },
					{ X: 310, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	BEE: {
		NAME: "Bee",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 620, Y: 248, WIDTH: 62, HEIGHT: 62 },
					{ X: 682, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	FLY: {
		NAME: "Fly",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 806, Y: 124, WIDTH: 62, HEIGHT: 62 },
					{ X: 868, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	SAW: {
		NAME: "Saw",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 0, Y: 372, WIDTH: 62, HEIGHT: 62 },
					{ X: 70, Y: 372, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: function(params) {
					if (Date.now() - params.time > 70) {
						params.time = Date.now();
						return true;
					}

					return false;
				}
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	HALF_SAW: {
		NAME: "Half saw",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 248, Y: 372, WIDTH: 62, HEIGHT: 62 },
					{ X: 310, Y: 372, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: function(params) {
					if (Date.now() - params.time > 70) {
						params.time = Date.now();
						return true;
					}

					return false;
				}
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	FROG: {
		NAME: "Frog",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 434, Y: 248, WIDTH: 62, HEIGHT: 62 },
					{ X: 496, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	SLIME_BLOCK: {
		NAME: "Slime block",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 620, Y: 372, WIDTH: 62, HEIGHT: 62 },
					{ X: 682, Y: 372, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 0,
		REVERSE_X_ADDITION: 0
	},
	GREEN_SLIME: {
		NAME: "Green slime",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 0,  Y: 124, WIDTH: 62, HEIGHT: 62 },
					{ X: 62, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			},
			"hit": {
				STEPS: [
					{ X: 186, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	PURPLE_SLIME: {
		NAME: "Purple slime",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 0,  Y: 0, WIDTH: 62, HEIGHT: 62 },
					{ X: 62, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			},
			"hit": {
				STEPS: [
					{ X: 186, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	BLUE_SLIME: {
		NAME: "Blue slime",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 0,  Y: 248, WIDTH: 62, HEIGHT: 62 },
					{ X: 62, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			},
			"hit": {
				STEPS: [
					{ X: 186, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	SNAIL: {
		NAME: "Snail",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 248,  Y: 124, WIDTH: 62, HEIGHT: 62 },
					{ X: 310, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			},
			"shell": {
				STEPS: [
					{ X: 372, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	LADYBUG: {
		NAME: "Ladybug",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 248, Y: 248, WIDTH: 62, HEIGHT: 62 },
					{ X: 310, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			},
			"fly": {
				STEPS: [
					// { X: 248, Y: 248, WIDTH: 62, HEIGHT: 62 },
					{ X: 372, Y: 248, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	BARNACLE: {
		NAME: "Barnacle",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 806, Y: 0, WIDTH: 62, HEIGHT: 62 },
					{ X: 868, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	GREEN_FISH: {
		NAME: "Green fish",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 434, Y: 0, WIDTH: 62, HEIGHT: 62 },
					{ X: 496, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	PINK_FISH: {
		NAME: "Pink fish",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 434, Y: 124, WIDTH: 62, HEIGHT: 62 },
					{ X: 496, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	BLUE_FISH: {
		NAME: "Blue fish",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 434, Y: 372, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 0,
		REVERSE_X_ADDITION: 62
	},
	GREEN_WORM: {
		NAME: "Green worm",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 620, Y: 0, WIDTH: 62, HEIGHT: 62 },
					{ X: 682, Y: 0, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	},
	PINK_WORM: {
		NAME: "Pink worm",
		MOVEMENTS: {
			"move": {
				STEPS: [
					{ X: 620, Y: 124, WIDTH: 62, HEIGHT: 62 },
					{ X: 682, Y: 124, WIDTH: 62, HEIGHT: 62 }
				],
				TRANSITION: ANIMATION_TRANSITION
			}
		},
		REVERSE_Y_ADDITION: 62,
		REVERSE_X_ADDITION: 0
	}
};

class EnemiesSprites {
	init(spriteManager) {
		let sprite = spriteManager.addSprite(ENEMY_SPRITE_NAME,
				new AnimationSprite(ENEMY_SPRITE_SRC));

		for (let creature in CREATURES) {
			let animationObject = sprite.createObject(CREATURES[creature].NAME);
			animationObject.params["time"] = Date.now();

			for (let motion in CREATURES[creature].MOVEMENTS) {
				let spriteSteps = [];
				let reverseSpriteSteps = [];

				for (let step in CREATURES[creature].MOVEMENTS[motion].STEPS) {
					spriteSteps.push(new StaticObject(animationObject.image,
							CREATURES[creature].MOVEMENTS[motion].STEPS[step].X,
							CREATURES[creature].MOVEMENTS[motion].STEPS[step].Y,
							CREATURES[creature].MOVEMENTS[motion].STEPS[step].WIDTH,
							CREATURES[creature].MOVEMENTS[motion].STEPS[step].HEIGHT));

					reverseSpriteSteps.push(new StaticObject(animationObject.image,
						CREATURES[creature].MOVEMENTS[motion].STEPS[step].X +
								CREATURES[creature].REVERSE_X_ADDITION,
						CREATURES[creature].MOVEMENTS[motion].STEPS[step].Y +
								CREATURES[creature].REVERSE_Y_ADDITION,
						CREATURES[creature].MOVEMENTS[motion].STEPS[step].WIDTH,
						CREATURES[creature].MOVEMENTS[motion].STEPS[step].HEIGHT));
				}

				animationObject.addMotion(motion.toLowerCase(), spriteSteps,
						CREATURES[creature].MOVEMENTS[motion].TRANSITION);
				animationObject.addMotion("reverse-" + motion.toLowerCase(),
						reverseSpriteSteps, CREATURES[creature].MOVEMENTS[motion].TRANSITION);
			}
		}
	}
}

