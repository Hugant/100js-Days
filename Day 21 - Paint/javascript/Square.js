class Square {
  constructor(context, x, y, fillColor, strokeColor) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
  }

  update(x, y) {
  	this.width = x - this.x;
  	this.height = y - this.y;
  }

  draw() {
  	this.context.fillStyle = this.fillColor;
  	this.context.fillRect(this.x, this.y, this.width, this.height);
  	this.context.strokeStyle = this.strokeColor;
  	this.context.strokeRect(this.x, this.y, this.width, this.height); 
  }
}