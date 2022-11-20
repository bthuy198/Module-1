//  Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. 
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
let arr = [1, 0, 10, 11, 99, 32, 5, 20, 100, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 10){
        count++;
    }
}
console.log("Mảng có " + count + ' phần tử lớn hơn hoặc bằng 10');