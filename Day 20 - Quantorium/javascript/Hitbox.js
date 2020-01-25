class Hitbox {
	constructor() {
		this.figures = [];
	}

	addFigure(figure) {
		this.figures.push(figure);
	}

	collision(hitbox) {
		for (let figure of this.figures) {
			for (let sFigure of hitbox) {
				figure.collision(sFigure);
			}
		}
	}
}


//
//
// class MapCollisionBox {
// 	constructor(x, y, width, height) {
// 		this.x = x;
// 		this.y = y;
// 		this.width = width;
// 		this.height = height;
// 	}
//
// 	collision(collisionBox) {
// 		if (this.intersectionX(collisionBox)) {
//
// 		}
// 	}
//
// 	intersectionX(box) {
// 		return (this.x < box.x + box.width) && (this.x + this.width > box.x);
// 	}
//
// 	intersectionY(box) {
// 		return (this.y < box.y + box.height) && (this.y + this.height > box.y);
// 	}
// }
//
// class CollisionBox {
// 	constructor(x, y, width, height) {
// 		this.x = x;
// 		this.y = y;
// 		this.width = width;
// 		this.height = height;
// 	}
// }
//
// class Hitbox {
// 	constructor(x, y) {
// 		if (this.constructor === Hitbox) {
// 			throw "Can't instantiate abstract class 'Hitbox'.";
// 		}
//
// 		this.x = x;
// 		this.y = y;
// 	}
//
// 	collision(hitbox) {
// 		if (hitbox instanceof RectangleHitbox) {
// 			for (let point of this.points) {
// 				if (this.intersectionX(point, hitbox) && this.intersectionY(point, hitbox)) {
//
// 				}
// 			}
// 		} else if (hitbox instanceof CircleHitbox) {
//
// 		} else {
// 			throw "";
// 		}
// 	}
//
// 	intersectionX(point, hitbox) {
// 		if (hitbox instanceof RectangleHitbox) {
// 			return point.x >= hitbox.x && point.x <= hitbox.x + hitbox.width;
// 		} else if (hitbox instanceof CircleHitbox) {
//
// 		} else {
// 			throw "";
// 		}
// 	}
//
// 	intersectionY(point, hitbox) {
// 		if (hitbox instanceof RectangleHitbox) {
// 			return point.y >= hitbox.y && point.y <= hitbox.y + hitbox.height;
// 		} else if (hitbox instanceof CircleHitbox) {
//
// 		} else {
// 			throw "";
// 		}
// 	}
// }
//
// class RectangleHitbox extends Hitbox {
// 	constructor(x, y, width, height) {
// 		super(x, y);
// 		this.width = width;
// 		this.height = height;
//
// 		this.points = [
// 			{x: this.x, y: this.y},
// 			{x: this.x + this.width, y: this.y},
// 			{x: this.x, y: this.y + this.height},
// 			{x: this.x + this.width, y: this.y + this.height}
// 		];
// 	}
// }
//
// // class RectangleHitbox extends Hitbox {
// // 	constructor(x, y, width, height) {
// // 		super(x, y);
// // 		this.width = width;
// // 		this.height = height;
// // 	}
// //
// // 	circleCollision(hitbox) {
// // 		let intersectionXWithRadius = function(hitbox) {
// // 			return hitbox.x >= this.x - hitbox.radius && hitbox.x <= this.x + this.width + hitbox.radius;
// // 		}
// //
// // 		let intersectionYWithRadius = function(hitbox) {
// // 			return hitbox.y >= this.y - hitbox.radius && hitbox.y <= this.y + this.height + hitbox.radius;
// // 		}
// //
// // 		if (hitbox instanceof CircleHitbox) {
// // 			if (this.intersectionX(hitbox)) {
// // 				if (intersectionYWithRadius(hitbox)) {
// // 					return true;
// // 				}
// // 			} else if (this.intersectionY(hitbox)) {
// // 				if (intersectionXWithRadius(hitbox)) {
// // 					return true;
// // 				}
// // 			} else if (intersectionXWithRadius(hitbox) && intersectionYWithRadius(hitbox)) {
// // 				if (Math.hypot(hitbox.x - this.x, hitbox.y - this.y) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y - this.height) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x, hitbox.y - this.y - this.height) <= hitbox.radius) {
// // 					return true;
// // 				}
// // 			}
// //
// // 			return false;
// // 		} else {
// // 			throw "";
// // 		}
// // 	}
// //
// // 	rectCollision(hitbox) {
// // 		if (hitbox instanceof RectangleHitbox) {
// // 			if (this.intersectionX(hitbox) && this.intersectionY(hitbox)) {
// // 				return true;
// // 			}
// //
// // 			return false;
// // 		} else {
// // 			throw "";
// // 		}
// // 	}
// //
// // 	intersectionX(hitbox) {
// // 		return this.x >= hitbox.x && this.x <= hitbox.x + hitbox.width;
// // 	}
// //
// // 	intersectionY(hitbox) {
// // 		return this.y >= hitbox.y && this.y <= hitbox.y + hitbox.height;
// // 	}
// // }
// //
// // class CircleHitbox extends Hitbox {
// // 	constructor(x, y, radius) {
// // 		super(x, y);
// // 		this.radius = radius;
// // 	}
// //
// // 	circleCollision(hitbox) {
// //
// // 	}
// //
// // 	rectCollision(hitbox) {
// // 		let intersectionXWithRadius = function(hitbox) {
// // 			return this.x >= hitbox.x - this.radius && this.x <= hitbox.x + hitbox.width + this.radius;
// // 		}
// //
// // 		let intersectionYWithRadius = function(hitbox) {
// // 			return this.y >= hitbox.y - this.radius && this.y <= hitbox.y + hitbox.height + this.radius;
// // 		}
// //
// // 		if (hitbox instanceof RectangleHitbox) {
// // 			if (this.intersectionX(hitbox)) {
// // 				if (intersectionYWithRadius(hitbox)) {
// // 					return true;
// // 				}
// // 			} else if (this.intersectionY(hitbox)) {
// // 				if (intersectionXWithRadius(hitbox)) {
// // 					return true;
// // 				}
// // 			} else if (intersectionXWithRadius(hitbox) && intersectionYWithRadius(hitbox)) {
// // 				if (Math.hypot(hitbox.x - this.x, hitbox.y - this.y) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y - this.height) <= hitbox.radius ||
// // 					Math.hypot(hitbox.x - this.x, hitbox.y - this.y - this.height) <= hitbox.radius) {
// // 					return true;
// // 				}
// // 			}
// //
// // 			return false;
// // 		} else {
// // 			throw "";
// // 		}
// // 	}
// //}