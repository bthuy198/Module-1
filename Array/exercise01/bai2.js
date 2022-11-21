// Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. 
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
let arr = [1, 3, 6, 2, 10, 99, 55, 40, 11];
let max = arr[0];
let index = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        index = i + 1;
    }
}
console.log(`Giá trị lớn nhất của mảng là ${max} ở vị trí ${index} `);