const DIRECTIONS = {
	RIGHT: 1,
	LEFT: -1
};

class Creature {
	constructor(x, y, width, height, animationObject) {
		if (this.constructor === Creature) {
			throw "Can't instantiate abstract class 'Creature'.";
		}
		this.x = x;
		this.y = y;
		this.diffs = { x: 0, y: 0 };
		this.width = width;
		this.height = height;
		this.gravity = 0;
		this.hitboxes = {
			attack: [],
			hurt: []
		};
		this.direction = DIRECTIONS.RIGHT;
		this.animationObject = animationObject;
	}

	draw(context) {
		this.animationObject.draw(context, this.x, this.y, this.width, this.height);
	}

	chooseMotion(motion) {
		this.animationObject.chooseMotion(motion);
	}

	move() {
		throw "Method 'move' has't been initialized.";
	}

	mapCollision(tiles) {
		let dx = this.x + this.diffs.x;
		let dy = this.y + this.diffs.y;

		for (let tile of tiles) {
			let collisionX = (dx < tile.x + tile.width) && (dx + this.width > tile.x);
			let collisionY = (dy < tile.y + tile.height) && (dy + this.height > tile.y);

			let creatureCenterX = this.x + this.width / 2;
			let creatureCenterY = this.y + this.height / 2;

			let tileCenterX = tile.x + tile.width / 2;
			let tileCenterY = tile.y + tile.height / 2;

			// if

			let mas = [
				Math.abs(tile.y - (dy + this.height)),
				Math.abs((tile.y + tile.height) - dy),
				Math.abs(tile.x - (dx + this.width)),
				Math.abs((tile.x + tile.width) - dx)
			];

			let min = 0;
			for (let i = 1; i < mas.length; i++) {
				if (mas[i] < mas[min]) {
					min = i;
				}
			} 


			let topCollision = (dy + this.height > tile.y) &&
					(Math.abs(tile.y - (dy + this.height)) < DIMENSIONS.MAP_ELEMENT.HEIGHT);
			let botCollision = (dy < tile.y + tile.height) &&
					(Math.abs((tile.y + tile.height) - dy) < DIMENSIONS.MAP_ELEMENT.HEIGHT);

			let rightCollision = (dx + this.width > tile.x) &&
					(Math.abs(tile.x - (dx + this.width)) < DIMENSIONS.MAP_ELEMENT.WIDTH);
			let leftCollision = (dx < tile.x + tile.width) &&
					(Math.abs((tile.x + tile.width) - dx) < DIMENSIONS.MAP_ELEMENT.WIDTH);


			let collisionDiffs = {x: 0, y: 0};

			if (collisionX && collisionY) {
				// console.log("-------------")
				// console.log("topCollision: " + Math.abs(tile.y - (dy + this.height)));
				// console.log("leftCollision: " + Math.abs(dx - (tile.x + tile.width)));
				// console.log("rightCollision: " + Math.abs(tile.x - (dx + this.width)));
				// console.log("botCollision: " + Math.abs((tile.y + tile.height) - dy));
				// console.log("-------------")

				// if (min === 0 || min === 1) {
				// 	this.diffs.x = 0;
				// }
				//
				// if (min === 2 || min === 3) {
				// 	this.diffs.y = 0;
				// }

				if (rightCollision || leftCollision) {
					this.diffs.y = 0;
					// break;
				} else if (topCollision || botCollision) {
					this.diffs.x = 0;
				}
			}

			// dx = this.x + this.diffs.x;
			//
			// collisionX = (dx < tile.x + tile.width) && (dx + this.width > tile.x);

			// topCollision = (dy + this.height > tile.y) &&
			// 		(Math.abs(tile.y - (dy + this.height)) < DIMENSIONS.MAP_ELEMENT.HEIGHT);
			// botCollision = (dy < tile.y + tile.height) &&
			// 		(Math.abs((tile.y + tile.height) - dy) < DIMENSIONS.MAP_ELEMENT.HEIGHT);

			// if (collisionX && collisionY) {
			// 	if (topCollision || botCollision) {
			// 		this.diffs.y = 0;
			// 		// break;
			// 	}
			// }

			// return collisionDiffs;

			dy = this.y + this.diffs.y;
			//
			//
			//
			//
			//
			// if (collisionY) {
			// 	if (rightCollision) {
			// 		this.diffs.x = 0;
			// 		// this.x = tile.x - this.width + 1;
			// 	} else if (leftCollision) {
			// 		this.diffs.x = 0;
			// 		// this.x = tile.x + tile.width - 1;
			// 	}
			// }

			dx = this.x + this.diffs.x;
		}
	}

	collision() {
		throw "Method 'collision' has't been initialized.";
	}
}

class Player extends Creature {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CHARACTERS.GREEN);
		super(x, y, width, height, animationObject);
		this.sprite = sprite;
		this.gravity = 3;
		this.speedX = 3;
		this.speedY = 3;
	}

	chooseCharacter(character) {
		this.animationObject = this.sprite.getObject(character);
	}

	exited() {
		// TODO: Declare function
	}

	move(keyboard, tiles) {
		let motion;

		this.diffs.x = 0;
		this.diffs.y = 0;

		if (keyboard.isDown("SPACE")) {
			motion = MOTIONS.JUMP.NAME;
			this.diffs.y -= 6;
			if (keyboard.isDown("LEFT")) {
				this.diffs.x = -this.speedX;
				this.direction = DIRECTIONS.LEFT;
			} else if (keyboard.isDown("RIGHT")) {
				this.diffs.x = this.speedX;
				this.direction = DIRECTIONS.RIGHT;
			}
		} else if (keyboard.isDown("LEFT")) {
			motion = MOTIONS.WALK.NAME;
			this.diffs.x = -this.speedX;
			this.direction = DIRECTIONS.LEFT;
		} else if (keyboard.isDown("RIGHT")) {
			motion = MOTIONS.WALK.NAME;
			this.diffs.x = this.speedX;
			this.direction = DIRECTIONS.RIGHT;
		} else if (keyboard.isDown("DOWN")) {
			motion = MOTIONS.DUCK.NAME;
			this.diffs.y = -3;
		} else if (keyboard.isDown("UP")) { 
			motion = MOTIONS.CLIMB.NAME;
			this.diffs.y = this.speedY;
		} else {
			motion = MOTIONS.STAND.NAME;
		}

		this.diffs.y += this.gravity;

		let collisionDiffs = this.mapCollision(tiles);
		// console.log(collisionDiffs);
		this.x += this.diffs.x ;
		this.y += this.diffs.y ;

		if (this.direction === DIRECTIONS.RIGHT) {
			this.chooseMotion(motion);
		} else {
			this.chooseMotion("reverse-" + motion);
		}
	}

	collision(enemy) {
		// TODO: Declare function
	}
}

class Enemy extends Creature {
	constructor(x, y, width, height, animationObject) {
		super(x, y, width, height, animationObject);
		if (this.constructor === Enemy) {
			throw "Can't instantiate abstract class 'Enemy'.";
		}
		this.gravity = 3;
	}

	move(keyboard, tiles) {

		// this.diffs.x = 0;

		if (keyboard.isDown("LEFT")) {
			this.direction = DIRECTIONS.LEFT;
			this.diffs.x = -1;
		} else if (keyboard.isDown("RIGHT")) {
			this.direction = DIRECTIONS.RIGHT;
			this.diffs.x = 1;
		}

		if (this.direction === DIRECTIONS.RIGHT) {
			this.chooseMotion("reverse-move");
		} else {
			this.chooseMotion("move");
		}

		this.diffs.x = this.direction * Math.abs(this.diffs.x);
		this.diffs.y = this.gravity;

		this.mapCollision(tiles);

		this.x += this.diffs.x;
		this.y += this.diffs.y;
	}

	collision(player) {
		// TODO: Declare function
	}
}

class Rat extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.RAT.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Bee extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.BEE.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Fly extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.FLY.NAME);

		super(x, y, width, height, animationObject);
	}
}

class GreenFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.GREEN_FISH.NAME);

		super(x, y, width, height, animationObject);
	}
}

class PinkFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.PINK_FISH.NAME);

		super(x, y, width, height, animationObject);
	}
}

class BlueFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.BLUE_FISH.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Frog extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.FROG.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Ladybug extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.LADYBUG.NAME);

		super(x, y, width, height, animationObject);
	}
}

class GreenSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.GREEN_SLIME.NAME);

		super(x, y, width, height, animationObject);
	}
}

class BlueSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.BLUE_SLIME.NAME);

		super(x, y, width, height, animationObject);
	}
}

class PurpleSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.PURPLE_SLIME.NAME);

		super(x, y, width, height, animationObject);
	}
}

class SlimeBlock extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.SLIME_BLOCK.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Snail extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.SNAIL.NAME);

		super(x, y, width, height, animationObject);
	}
}

class GreenWorm extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.GREEN_WORM.NAME);

		super(x, y, width, height, animationObject);
	}
}

class PinkWorm extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.PINK_WORM.NAME);

		super(x, y, width, height, animationObject);
	}
}

class Saw extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.SAW.NAME);

		super(x, y, width, height, animationObject);

	}

	move() {}
}

class HalfSaw extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.HALF_SAW.NAME);

		super(x, y, width, height, animationObject);

	}

	move() {}
}


class Barnacle extends Enemy {
	constructor(x, y, width, height, sprite) {
		let animationObject = sprite.getObject(CREATURES.BARNACLE.NAME);

		super(x, y, width, height, animationObject);

	}

	move() {}
}