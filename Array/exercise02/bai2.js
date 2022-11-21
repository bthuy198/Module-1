// Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. 
// Ví dụ, 
// nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"
let a = [ 'c', 's', 'c', '2', '6', '1' ];
let arr = []; //reverse a
let last = a.length - 1;
let first = 0;
for(last; last >= first; last--){
    arr.push(a[last]);
}
console.log(arr.join(''));