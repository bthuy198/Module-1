// function maxMinAvg(arr) {
//     //your code here 
//     let sum = 0;
//     let arrnew = new Array(3);
//     arrnew[0] = Math.max(...arr);
//     arrnew[1] = Math.min(...arr);
//     arr.map(function (value) {
//         return sum += value;
//     })
//     arrnew[2] = sum / arr.length;
//     return arrnew;
// }
// maxMinAvg(array);
// let array = [1, 5, 10, -2];
// let a = Math.max(...array);
// console.log(a);

function swap(arr) {
    //your code here
    let last = arr.length - 1;
    let arrnew = [];
    for(last; last >= 0; last--){
        arrnew.push(arr[last]);
    }
    return arrnew; 
}
let arr = [1,5,10, -2];
console.log(swap(arr));