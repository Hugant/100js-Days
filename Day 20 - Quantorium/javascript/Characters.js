// const MOTIONS = {
// 	FRONT: [0],
// 	STAND: [1],
// 	JUMP:  [2],
// 	DUCK:  [3],
// 	HIT: 	 [4],
// 	WALK:  [5, 6],
// 	CLIMB: [7, 8],
// 	SWIM:  [9, 10]
// }

// const SKINS = {
// 	GREEN: 	0,
// 	BLUE: 	1,
// 	PINK: 	2,
// 	YELLOW: 3,
// 	BEIGE: 	4
// }

// const SKIN = {
// 	SPRITE_WIDTH: 70,
// 	SPRITE_HEIGHT: 90,
// 	WIDTH: 70,
// 	HEIGHT: 90
// };

// class Characters {
// 	constructor(imageSprite) {
// 		this.imageSprite = imageSprite;
// 		this.currentSkin = null;
// 	}

// 	add(skin) {
// 		this.imageSprite.createCharacter(skin);
// 		this.imageSprite.getCharacter(skin).params["time"] = Date.now();

// 		for (var motion in MOTIONS) {
// 			var spriteSteps = [];
// 			var reverseSpriteSteps = [];
// 			for (var motionStep in MOTIONS[motion]) {
// 				spriteSteps.push(new SpriteObject(this.imageSprite.sprite, 
// 					MOTIONS[motion][motionStep] * SKIN.SPRITE_WIDTH,
// 					skin * SKIN.SPRITE_HEIGHT * 2,
// 					SKIN.SPRITE_WIDTH, SKIN.SPRITE_HEIGHT));

// 				reverseSpriteSteps.push(new SpriteObject(this.imageSprite.sprite,
// 					MOTIONS[motion][motionStep] * SKIN.SPRITE_WIDTH,
// 					skin * SKIN.SPRITE_HEIGHT * 2 + SKIN.SPRITE_HEIGHT,
// 					SKIN.SPRITE_WIDTH, SKIN.SPRITE_HEIGHT));
// 			}
			
// 			this.imageSprite.getCharacter(skin).addMotion(motion.toLowerCase(),
// 				spriteSteps, function(params) {
// 					if (Date.now() - params.time > 150) {
// 						params.time = Date.now();
// 						return true;
// 					}

// 					return false;
// 				});

// 			this.imageSprite.getCharacter(skin).addMotion("reverse-" + motion.toLowerCase(),
// 				reverseSpriteSteps, function(params) {
// 					if (Date.now() - params.time > 150) {
// 						params.time = Date.now();
// 						return true;
// 					}

// 					return false;
// 				});
// 		}
// 	}

// 	chooseSkin(skin) {
// 		this.imageSprite.getCharacter(skin);
// 		this.currentSkin = skin;
// 	}

// 	chooseMotion(motion) {
// 		this.imageSprite.getCharacter(this.currentSkin).chooseMotion(motion);
// 	}

// 	draw(context, x, y, width, height) {
// 		this.imageSprite.getCharacter(this.currentSkin).draw(context, x, y, width, height);
// 	}
// }