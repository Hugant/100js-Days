class GamePresent {
	constructor() {
		this.menu = null;
	}

	create() {
		// document.body.style.backgroundColor = "black";
		// createMenu("menu");
		// createCanvasIn("canvas", "");

		this.menu.create();
		this.canvas.create();
	}

	createMenu(name) {
		this.menu = new Menu(name);
		document.body.append(this.menu.getElement());
	}

	createCanvasIn(name, parentID) {
		let canvas = document.createElement("canvas");
		canvas.id = name;
		document.getElementById(parentID).append(canvas);
	}


}


class Menu {
	constructor(name) {
		this.name = name;
		this.items = [];
		this.itemStyles = [];
	}

	create() {

	}

	addItem(name, parentID, code) {
		this.items.push(new MenuItem(name, code));
	}

	getElement() {
		let menu = document.createElement("div");
		menu.id = this.name;

		return menu;
	}
}

class MenuItem {
	constructor(name, code) {
		this.name = name;
		this.code = code;
		this.items = [];
	}

	create() {

	}

	addItem(name, parentID, code) {
		this.items.push(new MenuItem(name, code));
	}
}

game = new GamePresent();
game.create();