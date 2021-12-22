class Circle {
    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    _color;
    _x;
    _y;
    _radius;

    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }

    jump() {
        console.log('jump');
        this.x = this.x + 10;
        this.color = randomColor();
        this.draw();
    }
}