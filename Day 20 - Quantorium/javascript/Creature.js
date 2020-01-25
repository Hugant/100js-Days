

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

		let figure = new Rect(new Point(this.x, this.y, this.width, this.height));
		let figure1 = new Circle(new Point(this.x, this.y, 10));
		figure.collision(figure1);
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

	mapCollision(tiles, context) {
		for (let tile of tiles) {
			let x = this.x + this.diffs.x;
			let heroCenterX = x + this.width / 2;
			let tileCenterX = tile.x + tile.width / 2;
			let left = Math.max(x, tile.x);
			let right = Math.min(x + this.width, tile.x + tile.width);

			let y = this.y + this.diffs.y;
			let heroCenterY = y + this.height / 2;
			let tileCenterY = tile.y + tile.height / 2;
			let top = Math.max(y, tile.y);
			let bottom = Math.min(y + this.height, tile.y + tile.height);

			let width = right - left;
			let height = bottom - top;
			if (width > 0 && height > 0) {
				if (width > height) {
					if (heroCenterY < tileCenterY) {
						this.diffs.y -= height;
					} else {
						this.diffs.y += height;
					}
				} else if (width < height) {
					if (heroCenterX > tileCenterX) {
						this.diffs.x += width;
					} else {
						this.diffs.x -= width;
					}
				} else {
					if (heroCenterY < tileCenterY) {
						this.diffs.y -= height / 2
					} else {
						this.diffs.y += height / 2;
					}
					if (heroCenterX > tileCenterX) {
						this.diffs.x += width / 2;
					} else {
						this.diffs.x -= width / 2;
					}
				}
			}
		}
	}

	collision(creature) {
		this.hitbox.collision(creature.hitbox);

		// throw "Method 'collision' has't been initialized.";
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

	move(keyboard, tiles, context) {
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

		this.mapCollision(tiles, context);
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

	move(keyboard, tiles, context) {

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

		this.mapCollision(tiles, context);

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