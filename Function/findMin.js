function findMin(array) {
    if (array.length === 0) {
        return -1;
    }
    let min = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            index = i;
        }
    }
    return `${min} ở vị trí ${index + 1}`;
}

let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];

console.log(findMin(arr1));
console.log(findMin(arr2));
console.log(findMin(arr3));
console.log(findMin(arr4));