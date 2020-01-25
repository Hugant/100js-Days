class Figure {
	constructor() {
		if (this.constructor === Figure) {
			throw "Can't instantiate abstract class 'Figure'.";
		}
	}

	collision() {
		throw "Method 'collision' has't been initialized.";
	}
}


class Rect extends Figure {
	constructor(point, width, height) {
		super();
		this.point = point;
		if (width < 0 || height < 0) {
			throw "Width or height can't be less than 0.";
		}
		this.width = width;
		this.height = height;
	}

	collision(figure) {
		if (figure instanceof Rect) {

		} else if (figure instanceof Circle) {

		} else if (figure instanceof Triangle) {

		}
	}
}


class Circle extends Figure {
	constructor(point, radius) {
		super();
		this.point = point;
		if (radius < 0) {
			throw "Radius can't be less than 0."
		}
		this.radius = radius;
	}
}


class Triangle extends Figure {
	constructor(point1, point2, point3) {
		super();
		this.point1 = point1;
		this.point2 = point2;
		this.point3 = point3;

		let a = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
		let b = Math.sqrt(Math.pow(point3.x - point2.x, 2) + Math.pow(point3.y - point2.y, 2));
		let c = Math.sqrt(Math.pow(point1.x - point3.x, 2) + Math.pow(point1.y - point3.y, 2));

		if (!(a < b + c && b < a + c && c < a + b)) {
			throw "Such a triangle with edges" + a + ", " + b + ", " + c + " cannot exist."
		}
	}
}


class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}