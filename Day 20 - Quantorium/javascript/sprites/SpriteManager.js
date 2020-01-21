// class Spriter {
// 	constructor() {
// 		this.sprites = {};
// 	}
//
// 	addSprite(name, spriteSrc) {
// 		if (!this.sprites.hasOwnProperty(name)) {
// 			this.sprites[name] = new Sprite(spriteSrc);
// 		} else {
// 			throw "Sprite with name '" + name + "' already exists.";
// 		}
//
// 		return this.sprites[name];
// 	}
//
// 	getSprite(name) {
// 		if (this.sprites.hasOwnProperty(name)) {
// 			return this.sprites[name];
// 		} else {
// 			throw "This spriter has no sprite '" + name + "'";
// 		}
// 	}
// }


class SpriteManager {
	constructor() {
		this.sprites = {};
	}

	addSprite(name, sprite) {
		if (this.sprites.hasOwnProperty(name)) {
			throw "Sprite with name '" + name + "' already exists.";
		} else {
			this.sprites[name] = sprite;
			return this.sprites[name];
		}
	}

	getSprite(name) {
		if (this.sprites.hasOwnProperty(name)) {
			return this.sprites[name];
		} else {
			throw "This sprite manager has no sprite '" + name + "'";
		}
	}
}

class Sprite {
	constructor() {
		if (this.constructor === Sprite) {
			throw "Can't instantiate abstract class 'Sprite'.";
		}
		this.objects = {};
	}

	createSection(name, sprite) {
		if (this.hasOwnProperty(name)) {
			throw "Section with name '" + name + "' is already exists.";
		} else {
			this[name] = sprite;
			return this[name];
		}
	}

	getSection(name) {
		if (this.hasOwnProperty(name)) {
			return this[name];
		} else {
			throw "This sprite has no section '" + name + "'";
		}
	}

	createObject() {
		if (this.constructor === Sprite) {
			throw "Method 'createObject' has't been initialized.";
		}
	}

	getObject(name) {
		if (this.objects.hasOwnProperty(name)) {
			return this.objects[name];
		} else {
			throw "This sprite has no object '" + name + "'";
		}
	}
}




class AnimationSprite extends Sprite {
	constructor(imageSrc) {
		super();
		this.image = new Image();
		this.image.src = imageSrc;
	}

	createObject(name) {
		if (this.objects.hasOwnProperty(name)) {
			throw "Object with same name '" + name + "' is already exists.";
		} else {
			this.objects[name] = new AnimationObject(this.image);
			return this.objects[name];
		}
	}
}

class StaticSprite extends Sprite {
	constructor(imageSrc) {
		super();
		this.image = new Image();
		this.image.src = imageSrc;

	}

	createObject(name, x, y, width, height) {
		if (this.objects.hasOwnProperty(name)) {
			throw "Object with same name '" + name + "' is already exists.";
		} else {
			this.objects[name] = new StaticObject(this.image, x, y, width, height);
			return this.objects[name];
		}
	}
}

class ImagesBank extends Sprite {
	constructor() {
		super();
		this.objects = {};
	}

	createObject(name, imageSrc) {
		if (this.objects.hasOwnProperty(name)) {
			throw "Object with same name '" + name + "' is already exists.";
		} else {
			this.objects[name] = new ImageObject(imageSrc);
		}
	}
}






class SpriteObject {
	constructor() {
		if (this.constructor === SpriteObject) {
			throw "Can't instantiate abstract class 'SpriteObject'.";
		}
	}

	draw() {
		if (this.constructor === SpriteObject) {
			throw "Method 'draw' has't been initialized.";
		}
	}
}

class ImageObject extends SpriteObject {
	constructor(imageSrc) {
		super();
		this.image = new Image();
		this.image.src = imageSrc;
	}

	draw(context, x, y, width, height) {
		context.drawImage(this.image, x, y, width, height);
	}
}

class StaticObject extends SpriteObject {
	constructor(image, x, y, spriteWidth, spriteHeight) {
		super();
		this.x = x;
		this.y = y;
		this.width = spriteWidth;
		this.height = spriteHeight;
		this.image = image;
	}

	draw(context, x, y, width, height) {
		context.drawImage(this.image, this.x, this.y, this.width, this.height,
				x, y, width, height);
	}
}

class AnimationObject extends SpriteObject {
	constructor(image) {
		super();
		this.image = image;
		this.motions = {};
		this.currentMotion = {};
		this.length = 0;
		this.params = {};
	}

	addMotion(name, spriteObjectsArr, stepTransition) {
		if (this.motions.hasOwnProperty(name)) {
			throw "Motion with same name already exists.";
		} else {
			this.motions[name] = new Motion(spriteObjectsArr, stepTransition);
			++this.length;
			if (this.length === 1) {
				this.currentMotion = this.motions[name];
			}
		}
		return this;
	}

	setMotionTransition(name, stepTransition) {
		if (this.motions.hasOwnProperty(name)) {
			if (typeof stepTransition == "function") {
				this.motions[name].stepTransition = stepTransition;
			} else {
				throw "Type of step transition should be 'function'";
			}
		} else {
			throw "You did't declare the motion '" + name + "'.";
		}
	}

	chooseMotion(name) {
		if (this.motions.hasOwnProperty(name)) {
			this.currentMotion = this.motions[name];
		} else {
			throw "You did't declare the motion '" + name + "'.";
		}
	}

	calculateMotionStep() {
		if (this.currentMotion.stepTransition(this.params)) {
			if (this.currentMotion.currentStep + 1 >= this.currentMotion.steps.length) {
				this.currentMotion.currentStep = 0;
			} else {
				this.currentMotion.currentStep++;
			}
		}
	}

	draw(context, x, y, width, height) {
		this.calculateMotionStep();
		let currStep = this.currentMotion.steps[this.currentMotion.currentStep];
		context.drawImage(currStep.image, currStep.x, currStep.y, currStep.width,
				currStep.height, x, y, width, height);
	}
}

class Motion {
	constructor(steps, stepTransition) {
		this.currentStep = 0;
		this.steps = steps;

		if (stepTransition != null && this.steps.length > 1) {
			if (typeof stepTransition == "function") {
				this.stepTransition = stepTransition;
			} else {
				throw "Type of step transition should be 'function'";
			}
		} else {
			this.stepTransition = function() {
				return false;
			}
		}
	}
}

// class SpriteCharacter {
// 	constructor() {
// 		this.motions = {};
// 		this.currentMotion = {};
// 		this.length = 0;
// 		this.params = {};
// 	}
//
// 	addMotion(name, spriteObjectsArr, stepTransition) {
// 		if (this.motions.hasOwnProperty(name)) {
// 			throw "Motion with same name already exists.";
// 		} else {
// 			this.motions[name] = new Motion(spriteObjectsArr, stepTransition);
// 			++this.length;
// 			if (this.length === 1) {
// 				this.currentMotion = this.motions[name];
// 			}
// 		}
//
// 		return this;
// 	}
//
// 	setMotionTransition(name, stepTransition) {
// 		if (this.motions.hasOwnProperty(name)) {
// 			if (typeof stepTransition == "function") {
// 				this.motions[name].stepTransition = stepTransition;
// 			} else {
// 				throw "Type of step transition should be 'function'";
// 			}
// 		} else {
// 			throw "You did't declare the motion '" + name + "'.";
// 		}
// 	}
//
// 	chooseMotion(name) {
// 		if (this.motions.hasOwnProperty(name)) {
// 			this.currentMotion = this.motions[name];
// 		} else {
// 			throw "You did't declare the motion '" + name + "'.";
// 		}
//
// 	}
//
// 	calculateMotionStep() {
// 		if (this.currentMotion.stepTransition(this.params)) {
// 			if (this.currentMotion.currentStep + 1 >= this.currentMotion.steps.length) {
// 				this.currentMotion.currentStep = 0;
// 			} else {
// 				this.currentMotion.currentStep++;
// 			}
// 		}
// 	}
//
// 	draw(context, x, y, width, height) {
// 		this.calculateMotionStep();
// 		context.drawImage(
// 				this.currentMotion.steps[this.currentMotion.currentStep].sprite,
// 				this.currentMotion.steps[this.currentMotion.currentStep].x,
// 				this.currentMotion.steps[this.currentMotion.currentStep].y,
// 				this.currentMotion.steps[this.currentMotion.currentStep].width,
// 				this.currentMotion.steps[this.currentMotion.currentStep].height,
// 				x, y, width, height);
// 	}
// }



// class SpriteSection {
// 	constructor() {
// 		this.sections = {};
// 		this.objects = {};
// 		this.characters = {};
// 	}
//
// 	createSection(name) {
// 		if (this.sections.hasOwnProperty(name)) {
// 			throw "Section with name '" + name + "' is already exists.";
// 		} else {
// 			this.sections[name] = new SpriteSection();
// 			return this.sections[name];
// 		}
// 	}
//
// 	getSection(name) {
// 		if (this.sections.hasOwnProperty(name)) {
// 			return this.sections[name];
// 		} else {
// 			throw "This sprite has no section '" + name + "'";
// 		}
// 	}
//
// 	createObject(sprite, name, x, y, spriteWidth, spriteHeight) {
// 		if (this.objects.hasOwnProperty(name)) {
// 			throw "Object with same name '" + name + "' is already exists.";
// 		} else {
// 			this.objects[name] =
// 				new SpriteObject(sprite, x, y, spriteWidth, spriteHeight);
// 			return this.objects[name];
// 		}
// 	}
//
// 	// createObject(name, image, width, height) {
// 	// 	if (this.objects.hasOwnProperty(name)) {
// 	// 		throw "Object with same name '" + name + "' is already exists.";
// 	// 	} else {
// 	// 		this.objects[name] = new ImageObject(image, width, height);
// 	// 		return this.objects[name];
// 	// 	}
// 	// }
//
// 	getObject(name) {
// 		if (this.objects.hasOwnProperty(name)) {
// 			return this.objects[name];
// 		} else {
// 			throw "This sprite has no object '" + name + "'";
// 		}
// 	}
//
// 	createCharacter(name) {
// 		if (this.characters.hasOwnProperty(name)) {
// 			throw "Character with name'" + name + "'is already exists.";
// 		} else {
// 			this.characters[name] = new SpriteCharacter();
// 			return this.characters[name];
// 		}
// 	}
//
// 	getCharacter(name) {
// 		if (this.characters.hasOwnProperty(name)) {
// 			return this.characters[name];
// 		} else {
// 			throw "This sprite has no character '" + name + "'";
// 		}
// 	}
// }

// class Sprite extends SpriteSection {
// 	constructor(spriteSrc) {
// 		super();
// 		this.sprite = new Image();
// 		this.sprite.src = spriteSrc;
// 	}
// }

// class SpriteObject {
// 	constructor(sprite, x, y, spriteWidth, spriteHeight) {
// 		this.x = x;
// 		this.y = y;
// 		this.sprite = sprite;
// 		this.width = spriteWidth;
// 		this.height = spriteHeight;
// 	}
//
// 	draw(context, x, y, width, height) {
// 		context.drawImage(this.sprite, this.x, this.y, this.width, this.height,
// 			x, y, width, height);
// 	}
// }

// class ImageObject {
// 	constructor(image, width, height) {
// 		this.image = image;
// 		this.width = width;
// 		this.height = height;
// 	}
//
// 	draw(context, x, y) {
// 		context.drawImage(this.image, x, y, this.width, this.height);
// 	}
// }
