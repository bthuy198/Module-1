// Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
let str1 = '     Hello VietNaM';
let str2 = 'HEllO ViEtNaM';
let str0 = 'hi VN';
//trim 2 chuỗi
// so sánh length 2 chuỗi
// in thường/ in hoa 2 chuỗi
// so sánh toUpper hoặc to Lower
function isSame(str, str0){
    let str3 = str0.trim();
    let str4 = str.trim();
    if(str3.length === str4.length){
        if(str3.toLowerCase() === str4.toLowerCase()){
            return true;
        }
    }
    return false;
}
console.log("Hai chuỗi có giống nhau không? " + isSame(str1, str2));