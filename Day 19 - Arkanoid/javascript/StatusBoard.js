class StatusBoard {
	constructor(params) {
		var errors = [];

		this.x = isNaN(params.x) ? errors.push("Coordinate x is not number") : params.x;
		this.y = isNaN(params.y) ? errors.push("Coordinate y is not number") : params.y;
		this.color = params.color;
		this.width = canvas.width;
		this.padding = params.padding;
		this.fontSize = isNaN(params.fontSize) ? errors.push("font size is not number") : params.fontSize;
		this.height = this.fontSize + this.padding.bottom;
		this.points = isNaN(params.points) ? errors.push("Points is not number") : params.points;
		this.playerHP = isNaN(params.player.hp) ? errors.push("Player.hp is not number") : params.player.hp;
		this.hpImage = new Image();
		this.hpImage.src = params.player.srcImage;
		this.hpImageHeight = params.player.hpHeight;
		this.hpImageWidth = params.player.hpWidth;
		this.hpMarginRight = 4;

		for (var err in errors) {
			throw errors[err];
		}
	}

	update(params) {
		var errors = [];

		this.points = params.points;
		this.playerHP = params.player.hp;

		for (var err in errors) {
			throw errors[err];
		}
	}


	draw() {
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.width, this.height);

		context.fillStyle = "white";
		context.font = this.fontSize + "px serif";
		context.textAlign = "left";
		context.fillText("Score: " + this.points, this.x + this.padding.left, this.y + this.fontSize);

		for (var i = 1; i <= this.playerHP; i++) {
			context.drawImage(this.hpImage, this.width - (this.hpImageWidth + this.hpMarginRight) * i, this.height - this.hpImageHeight, this.hpImageWidth, this.hpImageHeight);
		} 
	}
}