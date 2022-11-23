// Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. 
// Nếu là nguyên dương trả về true, ngược lại trả về false.
function isPositive(n){
    if(n === 0){
        return false;
    } else if (n > 0) {
        return true;
    } else {
        return false;
    }
}
let number = -1;
console.log(`${number} là số nguyên dương? ${isPositive(number)}`);