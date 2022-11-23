// Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function circleArea(r){
    return r * r * 3.14;
}
function circlePerimeter(r){
    return 2 * 3.14 * r;
}
let r = 3;
console.log(`area = ${circleArea(r)}, perimeter = ${circlePerimeter(r)}`);