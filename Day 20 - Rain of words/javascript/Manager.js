class Manager {
	constructor() {
		this.vocabulary = [];
		this.words = [];
		this.maxFontSize = 30;
		this.colorful = false;

		this.generateWords();
	}

	generateWords() {
		let self = this;
		setInterval(function() {
			if (self.vocabulary.length !== 0) {
				self.generateWord();
			}
		}, 300);

	}

	generateWord() {
		let color = {r: 255, g: 255, b: 255};

		if (this.colorful) {
			color = {
				r: Math.floor(Math.random() * 255),
				g: Math.floor(Math.random() * 255),
				b: Math.floor(Math.random() * 255)
			};
		}


		this.words.push(new Word(
			this.vocabulary[Math.floor(Math.random() * this.vocabulary.length)],
			Math.floor(Math.random() * canvas.width), -50 , 1,
			Math.floor(Math.random() * this.maxFontSize) +
			"pt arial", "center", color));
	}

	addWord(text) {
		this.vocabulary.push(text);
	}

	move() {
		for (let word of this.words) {
			word.move();
			if (word.opacity <= 0) {
				this.words.splice(this.words.indexOf(word), 1);
			}
		}
	}

	draw() {
		for (let word of this.words) {
			word.draw();
		}
	}
}