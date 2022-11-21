// Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. 
// Chương trình này đếm số ký tự số trong mảng. 
let a = ['abc', 0, 1, '999', 2, 10];
let count = 0;
function isNumber(num) {
    if (num === parseInt(num)){
        return true;
    }
    return false;
}

for(let i = 0; i < a.length; i++){
    if(isNumber(a[i])){
        count++;
    }
}
console.log('Mảng này có ' + count + ' ký tự số');