// Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
function findMin(a, b, c) {
    let min = 0;
    a < b ?
        a < c ? min = a : min = c :
        b > c ? min = c : min = b;
    return min;
}

console.log(findMin(10, 6, 9));