// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. 
// Chương trình kiểm tra xem V có thuộc mảng đã cho không, 
// nếu V thuộc mảng đã cho xoá V khỏi mảng 
// (Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, 
// và gán 0 cho phần tử cuối cùng của mảng)
let num = [1, 2, 0, 3, 4, 5];
let v = 3;
for (let i = 0; i < num.length; i++) {
    if (v === num[i]) {
        for (let j = i; j < num.length; j++) {
            num[j] = num[j + 1];

        }
        num[num.length - 1] = 0;
    }
}
console.log(num);
