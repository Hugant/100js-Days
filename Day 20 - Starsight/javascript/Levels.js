class Levels {
	constructor(player) {
		this.player = player;
		this.levels = [];
		this.currentLevel = 0;
	}

	init() {
		this.levels.push(new Level());

		for (let level of this.levels) {
			level.init();
		}
	}

	current() {
		return this.levels.slice(this.currentLevel, 1)[0];
	}

	next() {
		if (this.hasNext()) {
			return this.levels.slice(++this.currentLevel, 1)[0];
		} else {
			throw "Index out of bounds array.";
		}
	}

	hasNext() {
		return this.currentLevel + 1 < this.levels.length;
	}
}