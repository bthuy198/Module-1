// Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function reverseArr(arr) {
    let last = arr.length - 1;
    let first = 0;
    let arr_ = [];
    for (last; last >= first; last--) {
        arr_.push(arr[last]);
    }
    return arr_;
}

let numbers = [1, 40, 5, 80, 9, 100, 3, 4];
console.log(reverseArr(numbers));