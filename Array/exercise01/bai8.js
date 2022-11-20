// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử. 
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
let num = [1, 3, 1, 8, 5, 10, 20];
let temp = 0;
for(let i = 0; i < num.length - 1; i++){
    // tìm phần tử lớn nhất trong mảng
     let max = i;
    for(let j = i + 1; j < num.length ; j++){
        if(num[j] > num[max]){
            min = j;
            // đổi vị trí j với vị trí đầu tiên
            temp = num[j];
            num[j] = num[i];
            num[i] = temp;
        }
    }
}
console.log(num);