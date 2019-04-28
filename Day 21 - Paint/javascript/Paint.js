class Paint {
  constructor(canvas, context) {
    this.figures = {
      TRIANGLE: "triangle",
      SQUARE: "square",
      CIRCLE: "circle",
      ERASER: "eraser",
      CURVE: "curve",
      LINE: "line"
    };
    this.canvas = canvas;
    this.context = context;
    this.currentFigure = null;
    this.colors = {
      background: null,
      stroke: null,
      fill: null
    };
    this.drawed = [];
    this.lastIsUpdatable = false;
  }

  changeColors(stroke, fill) {
    this.colors.background = "black";
    this.colors.stroke = stroke;
    this.colors.fill = fill;
  }

  init(currentFigure, background, stroke, fill) {
    this.currentFigure = currentFigure;
    this.colors.background = background;
    this.colors.stroke = stroke;
    this.colors.fill = fill;

    this.canvas.onmousedown = this.onmousedown.bind(this);
    this.canvas.onmouseup = this.onmouseup.bind(this);
    this.canvas.onmousemove = this.onmousemove.bind(this);

    this.animate();
  }

  animate() {
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.context.fillStyle = this.colors.background;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    for (let figure of this.drawed) {
      figure.draw();
    }
  }

  onmousedown(event) {
    if (this.currentFigure === this.figures.TRIANGLE) {
      this.drawed.push(
        new Triangle(this.context, event.layerX, event.layerY,
                     this.colors.fill, this.colors.stroke));
    } else if (this.currentFigure === this.figures.SQUARE) {
      this.drawed.push(
        new Square(this.context, event.layerX, event.layerY,
                   this.colors.fill, this.colors.stroke));
    } else if (this.currentFigure === this.figures.CIRCLE) {
      this.drawed.push(
        new Circle(this.context, event.layerX, event.layerY,
                   this.colors.fill, this.colors.stroke));
    } else if (this.currentFigure === this.figures.LINE) {
      this.drawed.push(new Line(this.context, event.layerX,
          event.layerY, this.colors.stroke));
    } else if (this.currentFigure === this.figures.CURVE) {
      this.drawed.push(new Curve(this.context, event.layerX,
          event.layerY, this.colors.stroke));
    } else if (this.currentFigure === this.figures.ERASER) {
      this.drawed.push(new Eraser(this.context, event.layerX,
          event.layerY, 10, this.colors.background, "white"));
    }

    this.lastIsUpdatable = true;
  }

  onmouseup() {
    this.lastIsUpdatable = false;
  }

  onmousemove(event) {
    if (this.lastIsUpdatable) {
      this.drawed[this.drawed.length - 1].update(event.layerX, event.layerY);
    }
  }
}