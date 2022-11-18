// Bài 3: Viết một chương trình nhập vào một chuỗi và 
// chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa. 
// Ví dụ: nếu bạn nhập vào chuỗi 'The Quick Brown Fox' 
// kết quả của chương trình là 'tHE qUICK bROWN fOX'.

let str = 'HellO Vietnam';
let result = [];
// hàm kiểm tra chữ thường chữ hoa
function isUpperCase(character) {
    if (character == character.toUpperCase()) {
        return true;
    }
    else return false;
}

for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
        result.push(str[i].toLowerCase());
    } else{
        result.push(str[i].toUpperCase());
    }
}
console.log(result.join(''));