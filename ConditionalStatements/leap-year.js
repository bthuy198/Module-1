// let inputYear = prompt('Nhập năm cần kiểm tra');
let year = 2000;
if ((year % 4 == 0) && (year % 100 != 0)) {
    console.log(year + ' là năm nhuận');
} else if ((year % 400 == 0) && (year % 100 == 0)) {
    console.log(year + ' là năm nhuận');
} else {
    console.log(year + ' là năm không nhuận');
}