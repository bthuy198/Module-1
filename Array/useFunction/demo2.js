// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. 
//Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.

let num = 24854746;
let str = num.toString();
let result = [str[0]];
for(let i = 1; i < str.length; i++){
    if(str[i - 1] % 2 === 0 && str[i]% 2 === 0){
        result.push('-', str[i]);
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));