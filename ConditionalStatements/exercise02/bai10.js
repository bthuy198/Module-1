// Viết chương trình tính tiền điện với chỉ số mới và chỉ số cũ Được nhập vào từ bàn phím.
// In ra màn hình chỉ số cũ, chỉ số mới và số tiền phải trả.
// Biết rằng 100 kWh đầu giá 1000, 
// từ kWh 101 – 150 giá 1200, 
// từ kWh 151 – 200 giá 2000, 
// từ 201 trở lên giá 2500.
let old_N = 100;
let new_N = 300;
let num = new_N - old_N;
let money = 0;
if (num <= 100) {
    money = num * 1000;
} else if (num <= 150) {
    money = 100 * 1000 + (num - 100) * 1200;
} else if (num <= 200) {
    money = 100 * 1000 + 50 * 1200 + (num - 150) * 2000;
} else if (num > 200) {
    money = 100 * 1000 + 50 * 1200 + 50 * 2000 + (num - 200) * 2500;
}
console.log(money);
