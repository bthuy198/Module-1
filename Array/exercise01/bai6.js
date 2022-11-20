// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. 
// Chương trình tìm xem V có nằm trong mảng số nguyên không? 
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
let num = [1, 0, 3, 2, 4];
let v = 2;
let exist = false;
for (let i = 0; i < num.length; i++) {
    if (v === num[i]) {
        exist = true;
    }
}

if (exist != true) {
    console.log("V is not in the array");
} else {
    console.log("V is in the array");
}


