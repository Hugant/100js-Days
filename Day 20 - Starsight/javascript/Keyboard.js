class Keyboard {
	constructor() {
		this.keyStack = [];
	}

	isDown(key) {
		return this.keyStack.includes(key);
	}

	create() {
		let self = this;
		window.onkeydown = function(e) {
			if (!self.keyStack.includes(e.key)) {
				self.keyStack.push(e.key);
			}
		};
		
		window.onkeyup = function(e) {
			self.keyStack.splice(self.keyStack.indexOf(e.key), 1);
		};
	}

	remove() {
		window.onkeydown = function(e) {};
		this.keyStack = [];
	}
}