// Viết chương trình nhập vào một mảng ký tự, 
// tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
let arr = ['abc', '-', 'viet-nam', '0234-355-4343'];

//kiểm tra từng phần tử của mảng 
//kiểm tra từng kí tự của 1 phần tử
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i].charAt(j) == '-') {
            arr[i] = arr[i].replace('-', '_');
        }
    }
}
console.log(arr);
