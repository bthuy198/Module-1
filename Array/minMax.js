let number = [1, 2, 0, 1, 0, 3, 10, 4];
let max = number[1];
let min = number[1];
let index1 = 0;
let index2 = 0;
// tìm giá trị lớn nhất
for (let i = 0; i < number.length - 1; i++) {
    if (number[i] > max) {
        max = number[i];
        index1 = i + 1;
    }
}
//tìm giá trị bé nhất
for (let i = 0; i < number.length - 1; i++) {
    if (number[i] < min) {
        min = number[i];
        index2 = i + 1;
    }
}
console.log('value max in array is ' + max + ' at position ' + index1);
console.log('value min in array is ' + min + ' at position ' + index2);