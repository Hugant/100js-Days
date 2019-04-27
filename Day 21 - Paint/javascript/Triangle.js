class Triangle {
  constructor(context, x, y, fillColor, strokeColor) {
  	this.context = context;
    this.startX = x;
    this.startY = y;
    this.endX = x;
    this.endY = y;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
  }

  update(x, y) {
  	this.endX = x;
  	this.endY = y;
  }

  draw() {
  	this.context.fillStyle = this.fillColor;
  	this.context.strokeStyle = this.strokeColor;
  	this.context.beginPath();
  	this.context.moveTo(this.startX, this.startY);
  	this.context.lineTo(this.endX, this.endY);
  	this.context.lineTo(this.startX, this.endY);
  	this.context.lineTo(this.startX, this.startY);
  	this.context.fill();
  	this.context.stroke();
  	this.context.closePath();
  }
}