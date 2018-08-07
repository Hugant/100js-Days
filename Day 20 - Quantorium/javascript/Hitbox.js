// class Hitbox {
// 	constructor(x, y) {
// 		if (this.constructor === Hitbox) {
// 			throw "Can't instantiate abstract class 'Hitbox'.";
// 		}

// 		this.x = x;
// 		this.y = y;
// 	}

// 	collision(hitbox) {
// 		if (hitbox instanceof RectangleHitbox) {

// 		} else if (hitbox instanceof CircleHitbox) {

// 		} else {
// 			throw "";
// 		}
// 	}
// }

// class RectangleHitbox extends Hitbox {
// 	constructor(x, y, width, height) {
// 		super(x, y);
// 		this.width = width;
// 		this.height = height;
// 	}

// 	circleCollision(hitbox) {
// 		let intersectionXWithRadius = function(hitbox) {
// 			return hitbox.x >= this.x - hitbox.radius && hitbox.x <= this.x + this.width + hitbox.radius;
// 		}

// 		let intersectionYWithRadius = function(hitbox) {
// 			return hitbox.y >= this.y - hitbox.radius && hitbox.y <= this.y + this.height + hitbox.radius;
// 		}

// 		if (hitbox instanceof CircleHitbox) {
// 			if (this.intersectionX(hitbox)) {
// 				if (intersectionYWithRadius(hitbox)) {
// 					return true;
// 				}
// 			} else if (this.intersectionY(hitbox)) {
// 				if (intersectionXWithRadius(hitbox)) {
// 					return true;
// 				}
// 			} else if (intersectionXWithRadius(hitbox) && intersectionYWithRadius(hitbox)) {
// 				if (Math.hypot(hitbox.x - this.x, hitbox.y - this.y) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y - this.height) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x, hitbox.y - this.y - this.height) <= hitbox.radius) {
// 					return true;
// 				}
// 			}

// 			return false;
// 		} else {
// 			throw "";
// 		}
// 	}

// 	rectCollision(hitbox) {
// 		if (hitbox instanceof RectangleHitbox) {
// 			if (this.intersectionX(hitbox) && this.intersectionY(hitbox)) {
// 				return true;
// 			}

// 			return false;
// 		} else {
// 			throw "";
// 		}
// 	}

// 	intersectionX(hitbox) {
// 		return this.x >= hitbox.x && this.x <= hitbox.x + hitbox.width;
// 	}

// 	intersectionY(hitbox) {
// 		return this.y >= hitbox.y && this.y <= hitbox.y + hitbox.height;
// 	}
// }

// class CircleHitbox extends Hitbox {
// 	constructor(x, y, radius) {
// 		super(x, y);
// 		this.radius = radius;
// 	}

// 	circleCollision(hitbox) {

// 	}

// 	rectCollision(hitbox) {
// 		let intersectionXWithRadius = function(hitbox) {
// 			return this.x >= hitbox.x - this.radius && this.x <= hitbox.x + hitbox.width + this.radius;
// 		}

// 		let intersectionYWithRadius = function(hitbox) {
// 			return this.y >= hitbox.y - this.radius && this.y <= hitbox.y + hitbox.height + this.radius;
// 		}

// 		if (hitbox instanceof RectangleHitbox) {
// 			if (this.intersectionX(hitbox)) {
// 				if (intersectionYWithRadius(hitbox)) {
// 					return true;
// 				}
// 			} else if (this.intersectionY(hitbox)) {
// 				if (intersectionXWithRadius(hitbox)) {
// 					return true;
// 				}
// 			} else if (intersectionXWithRadius(hitbox) && intersectionYWithRadius(hitbox)) {
// 				if (Math.hypot(hitbox.x - this.x, hitbox.y - this.y) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x - this.width, hitbox.y - this.y - this.height) <= hitbox.radius ||
// 					Math.hypot(hitbox.x - this.x, hitbox.y - this.y - this.height) <= hitbox.radius) {
// 					return true;
// 				}
// 			}

// 			return false;
// 		} else {
// 			throw "";
// 		}
// 	}
// }