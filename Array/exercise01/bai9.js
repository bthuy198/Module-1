// Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b. 
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. 
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
let a = [1, 4, 6, 9, 10, 0, 5, 20, 7, ];
let b = [10, 4, 6, 5, 40, 5];
let c = a.concat(b);
console.log(c);