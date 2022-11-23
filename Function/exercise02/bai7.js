// Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function swap(a, b){
    let temp = 0;
    temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}, b = ${b}`);
}
let a = 5, b = 10;
console.log(`trước khi đổi chỗ: a = ${a}, b = ${b}`);
console.log('sau khi đổi chỗ:');
// let temp =0;
// temp = a;
// a = b;
// b = temp;
swap(a, b);