class VirtualKeyboard {
	constructor() {
		this.keys = {
			"LEFT": 37,
			"RIGHT": 39,
			"UP": 38,
			"DOWN": 40,
			"SPACE": 32,
			"ENTER": 13
		};

		this.keyStack = [];
	}

	isDown(keyName) {
		return this.keyStack.indexOf(this.keys[keyName]) >= 0;
	}

	addKey(keyCode) {
		if (!~this.keyStack.indexOf(keyCode)) {
			this.keyStack.push(keyCode);
		}
	}

	removeKey(keyCode) {
		this.keyStack.splice(this.keyStack.indexOf(keyCode), 1);
	}

	create() {
		self = this;
		window.onkeydown = function(e) {
			self.addKey(e.keyCode);
		};
		
		window.onkeyup = function(e) {
			self.removeKey(e.keyCode);
		};
	}

	remove() {
		window.onkeydown = function(e) {}
	}
}