// Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, 
// kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. 
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1. 
function countCharacter(arr, character) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === character) {
            count++;
        }
    }
    if (count == 0) {
        return -1;
    } else return count;
}

let array = ['a', 'b', 'c', 'a', 'v', 'c'];
console.log(countCharacter(array, '.'));