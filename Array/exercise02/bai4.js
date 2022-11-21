// Viết một chương trình để đếm số từ trong một chuỗi

let str_ = '    He llo Vi et n am  ';
let str = str_.trim();
let count = 1; // từ đầu tiên kh bắt đầu từ khoảng trắng

//nếu 1 kí tự là khoảng trắng và kế tiếp kh phải là khoảng trắng thì biến dếm count++
for (let i = 1; i < str.length; i++) {
    if (str[i] == ' ' && str[i + 1] != ' ') {
        count++;
    }
}
console.log('Chuỗi có ' + count + ' từ');