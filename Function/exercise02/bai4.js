// Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. 
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function isNumber(n){
    if(n === Number(n)){
        return true;
    }
    return false;
}
let a = 1232;
console.log(isNumber(a));