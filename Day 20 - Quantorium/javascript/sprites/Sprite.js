class Sprite {
	constructor(spriteSrc) {
		this.sprite = new Image();
		this.sprite.src = spriteSrc;
		this.spriteObjects = {};
	}

	createObject(name, x, y, spriteWidth, spriteHeight) {
		this.spriteObjects[name] = new SpriteObject(this.sprite, x, y, spriteWidth, spriteHeight);
	}

	createObject(name, image, width, height) {
		this.spriteObjects[name] = new ImageObject(image, width, height);
	}

	createCharacter(name) {
		this.spriteObjects[name] = new SpriteCharacter();
	}

	getObject(name) {
		if (this.spriteObjects.hasOwnProperty(name)) {
			return this.spriteObjects[name];
		} else {
			throw "This sprite has no object '" + name + "'";
		}
	}
}

