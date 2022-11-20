// Viết chương trình khởi tạo mảng số nguyên. 
// Hiển hiện giá trị lớn nhất trong mảng đó. 
// In ra giá trị trung bình của các phần tử trong mảng.
let num = [1, 2, 4, 5, 7, 10, 1, 6];
let max = num[1];
let sum = 0;
let index = 0;
for (let i = 0; i < num.length; i++) {
    sum += num[i];
    if (num[i] > max) {
        max = num[i];
        index = i;
    }
}
let average = sum / (num.length - 1);
console.log("Giá trị lớn nhất của mảng là " + max + ' ở vị trí thứ ' + (index + 1));
console.log("Giá trị trung bình của mảng là " + average.toFixed(2));