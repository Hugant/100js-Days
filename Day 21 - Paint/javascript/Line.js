class Line {
  constructor(context, x, y, strokeColor) {
  	this.context = context;
    this.startX = x;
    this.startY = y;
    this.endX = x;
    this.endY = y;
    this.strokeColor = strokeColor;
  }

  update(x, y) {
  	this.endX = x;
  	this.endY = y;
  }

  draw() {
  	this.context.strokeStyle = this.strokeColor;
  	this.context.beginPath();
  	this.context.moveTo(this.startX, this.startY);
  	this.context.lineTo(this.endX, this.endY);
  	this.context.stroke();
  	this.context.closePath();
  }
}