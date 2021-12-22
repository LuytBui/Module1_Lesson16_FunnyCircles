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
    context;

    constructor(x, y, radius, color, context) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color
        this.context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    jump() {
        console.log('jump');
        this.x = this.x + 10;
        this.color = randomColor();
        this.draw();
    }
}

function newRandomCircle(canvas, context){
    let randomX = Math.random() * canvas.width;
    let randomY = Math.random() * canvas.height;
    let randomRadius = 20+ Math.random() * 50;
    let circle = new Circle(randomX, randomY,randomRadius, randomColor(), context);
    circle.draw();
}