let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth - 250;
canvas.height = window.innerHeight / 1.2;

let paint = new Paint(canvas, context);
paint.init(paint.figures.LINE, "black", "red", "white")

document.getElementById("line").onclick = function() {
  document.querySelector(".selected").classList.remove("selected")
  this.classList.add("selected");
  paint.currentFigure = paint.figures.LINE;
}

document.getElementById("curve").onclick = function() {
	document.querySelector(".selected").classList.remove("selected")
	this.classList.add("selected");
	paint.currentFigure = paint.figures.CURVE;
}

document.getElementById("square").onclick = function() {
  document.querySelector(".selected").classList.remove("selected")
  this.classList.add("selected");
  paint.currentFigure = paint.figures.SQUARE;
}

document.getElementById("triangle").onclick = function() {
  document.querySelector(".selected").classList.remove("selected")
  this.classList.add("selected");
  paint.currentFigure = paint.figures.TRIANGLE;
}

document.getElementById("circle").onclick = function() {
  document.querySelector(".selected").classList.remove("selected")
  this.classList.add("selected");
  paint.currentFigure = paint.figures.CIRCLE;
}

document.getElementById("eraser").onclick = function() {
	document.querySelector(".selected").classList.remove("selected")
	this.classList.add("selected");
	paint.currentFigure = paint.figures.ERASER;
}

function colorChange() {
	paint.changeColors(
		document.getElementById("stroke").value,
		document.getElementById("fill").value);
}

document.getElementById("stroke").addEventListener("change", colorChange, false);
document.getElementById("fill").addEventListener("change", colorChange, false);

