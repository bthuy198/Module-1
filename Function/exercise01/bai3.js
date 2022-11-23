// Tạo hàm nhận vào hai tham số. 
// Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. 
// Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
function check(a, b) {
    if (a > b) {
        console.log(`${a} lớn hơn ${b}`);
    }
    else {
        console.log(a + b);
    }
}
check(3, 5);