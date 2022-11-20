// Viết chương trình đếm số nguyên âm trong một chuỗi
let num = [1, 0, -1, -4, -10, -8];
let count  = 0;
for(let i = 0; i < num.length; i++){
    if (num[i] < 0) {
    count++;        
    }
}
console.log('Mảng có ' + count + ' số nguyên âm');