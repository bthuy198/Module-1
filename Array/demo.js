let eng = ['apple', 'mango', 'banana', 'melon'];
let vie = ['táo', 'xoài', 'chuối', 'dưa'];
//hàm tìm kiếm từ
let word = 'xoài';
function isExist(w) {
    for (let i = 0; i < eng.length; i++) {
        if (w == eng[i]) {
            console.log(vie[i]);
            return true;
        }
    }
    return false;
}
if(isExist(word) == false){
    console.log('not found');
}