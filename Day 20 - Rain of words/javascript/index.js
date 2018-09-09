let canvas;
let context;

let manager;

window.onresize = function() {
	updateScreen();
};

function updateScreen() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

window.onload = function() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	updateScreen();

	manager = new Manager();

	animation();
};

document.getElementById("input").onkeydown = function(e) {
	if (e.key === "Enter") {
		manager.addWord(this.value);
		this.value = "";
	}
};

document.getElementById("checkbox").onclick = function() {
	manager.colorful = !manager.colorful;
};

function animation() {
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height);

	manager.draw();
	manager.move();
	window.requestAnimationFrame(animation);
}

