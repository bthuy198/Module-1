let Circle = function (radius, color) {
    this.radius = radius;
    this.color = color;
    this.getRadius = function () {
        return radius;
    }
    this.getColor = function () {
        return color;
    }
    this.getArea = function () {
        return (radius * radius * Math.PI).toFixed(2);
    }
}

let circle = new Circle(4, 'blue');
let circle2 = new Circle(2, 'red');
console.log('circle 1');
console.log(`color = ${circle.getColor()}, r = ${circle.getRadius()}, area = ${circle.getArea()}`);
console.log('circle 2');
console.log(`color = ${circle2.getColor()}, r = ${circle2.getRadius()}, area = ${circle2.getArea()}`);