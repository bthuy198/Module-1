// Bài 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau. 
// Ví dụ có mảng chuỗi như sau: myColor = ["Red", "Green", "White", "Black"];
// Sau khi thực thi chương trình sẽ trả về dạng như sau : 
// "Red,Green,White,Black"'

let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join(' + '));