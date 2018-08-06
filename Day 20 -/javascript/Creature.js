const DIRECTIONS = {
	RIGHT: 1,
	LEFT: -1
};

class Creature {
	constructor(x, y, width, height, character) {
		if (this.constructor === Creature) {
			throw "Can't instantiate abstract class 'Creature'.";
		}
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.gravity = 0;
		this.hitboxes = {
			attack: [],
			hurt: []
		};
		this.direction = DIRECTIONS.RIGHT;
		this.character = character;
	}

	draw(context) {
		this.character.draw(context, this.x, this.y, this.width, this.height);
	}

	chooseMotion(motion) {
		this.character.chooseMotion(motion);
	}

	move() {
		throw "Method 'move' has't been initialized.";
	}

	mapCollision() {

	}

	collision() {
		throw "Method 'collision' has't been initialized.";
	}
}

class Player extends Creature {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CHARACTERS.GREEN);
		super(x, y, width, height, character);

		this.sprite = sprite;
	}

	chooseCharacter(character) {
		this.character = this.sprite.getCharacter(character);
	}

	exited() {

	}

	move(keyboard) {
		let motion;

		if (keyboard.isDown("SPACE")) {
			motion = "jump";
			if (keyboard.isDown("LEFT")) {
				this.x -= 3;
				this.direction = DIRECTIONS.LEFT;
			} else if (keyboard.isDown("RIGHT")) {
				this.x += 3;
				this.direction = DIRECTIONS.RIGHT;
			}
		} else if (keyboard.isDown("LEFT")) {
			motion = "walk";
			this.x -= 3;
			this.direction = DIRECTIONS.LEFT;
		} else if (keyboard.isDown("RIGHT")) {
			motion = "walk";
			this.x += 3;
			this.direction = DIRECTIONS.RIGHT;
		} else if (keyboard.isDown("DOWN")) {
			motion = "duck";
		} else if (keyboard.isDown("UP")) { 
			motion = "climb";
		} else  {
			motion = "stand";
		}

		if (this.direction === DIRECTIONS.RIGHT) {
			this.chooseMotion(motion);
		} else {
			this.chooseMotion("reverse-" + motion);
		}
	}

	collision(enemy) {

	}
}

class Enemy extends Creature {
	constructor(x, y, width, height, character) {
		super(x, y, width, height, character);
		if (this.constructor === Enemy) {
			throw "Can't instantiate abstract class 'Enemy'.";
		}

		this.dx = 1;
		this.dy = 0;
	}

	move(keyboard) {
		if (keyboard.isDown("LEFT")) {
			this.direction = DIRECTIONS.LEFT;
		} else if (keyboard.isDown("RIGHT")) {
			this.direction = DIRECTIONS.RIGHT;
		}

		if (this.direction === DIRECTIONS.RIGHT) {
			this.chooseMotion("reverse-move");
		} else {
			this.chooseMotion("move");
		}

		this.dx = this.direction * Math.abs(this.dx);
		this.x += this.dx;
	}

	collision(player) {

	}
}

class Rat extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.RAT.NAME);

		super(x, y, width, height, character);
	}
}

class Bee extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.BEE.NAME);

		super(x, y, width, height, character);
	}
}

class Fly extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.FLY.NAME);

		super(x, y, width, height, character);
	}
}

class GreenFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.GREEN_FISH.NAME);

		super(x, y, width, height, character);
	}
}

class PinkFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.PINK_FISH.NAME);

		super(x, y, width, height, character);
	}
}

class BlueFish extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.BLUE_FISH.NAME);

		super(x, y, width, height, character);
	}
}

class Frog extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.FROG.NAME);

		super(x, y, width, height, character);
	}
}

class Ladybug extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.LADYBUG.NAME);

		super(x, y, width, height, character);
	}
}

class GreenSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.GREEN_SLIME.NAME);

		super(x, y, width, height, character);
	}
}

class BlueSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.BLUE_SLIME.NAME);

		super(x, y, width, height, character);
	}
}

class PurpleSlime extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.PURPLE_SLIME.NAME);

		super(x, y, width, height, character);
	}
}

class SlimeBlock extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.SLIME_BLOCK.NAME);

		super(x, y, width, height, character);
	}
}

class Snail extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.SNAIL.NAME);

		super(x, y, width, height, character);
	}
}

class GreenWorm extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.GREEN_WORM.NAME);

		super(x, y, width, height, character);
	}
}

class PinkWorm extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.PINK_WORM.NAME);

		super(x, y, width, height, character);
	}
}

class Saw extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.SAW.NAME);

		super(x, y, width, height, character);

	}

	move() {

	}
}

class HalfSaw extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.HALF_SAW.NAME);

		super(x, y, width, height, character);

	}

	move() {

	}
}


class Barnacle extends Enemy {
	constructor(x, y, width, height, sprite) {
		let character = sprite.getCharacter(CREATURES.BARNACLE.NAME);

		super(x, y, width, height, character);

	}

	move() {

	}
}