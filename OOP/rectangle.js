let Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
    this.getPerimeter = function () {
        return (this.width + this.height) * 2;
    }
}

let rectangle = new Rectangle(500, 200);

// vẽ bằng canvas
function createRect(rectangle){
    let context = document.getElementById('myCanvas').getContext('2d');
    context.beginPath();
    context.rect(30, 30, rectangle.width, rectangle.height);
    context.fillStyle = 'red';
    context.fill();
}

function display(){
    let result = `Hình chữ nhật có chiều rộng = ${rectangle.width}, chiều dài = ${rectangle.height} \n S = ${rectangle.getArea()}, P = ${rectangle.getPerimeter()}`;
    document.getElementById("result").innerHTML = result;
}

display();
createRect(rectangle);


//map 
// rectangles.map(function showResult(value, index) {
//     console.log(`rectangle ${index + 1}: area = ${value.getArea()}, perimeter = ${value.getPerimeter()}`);
// })

// for in
// for (let index in rectangles) {
//     console.log('rectangle ' + index);
//     console.log(rectangles[index].getArea());
//     console.log(rectangles[index].getPerimeter());
// }

//for of
// for (let rectangle of rectangles) {
//     console.log(rectangle.getArea());
// }

//for each
// rectangles.forEach(function(value, index){
//     console.log(`rectangle ${index + 1}: area = ${value.getArea()}, perimeter = ${value.getPerimeter()}`);
// })
