//ktra số nguyên tố
//ktra số đó có chia hết cho số 2 đến nó - 1
// let number = 11;
// let count = 0;
// for (let i = 2; i < number - 1; i++) {
//     if (number % i === 0) {
//         count++;
//     }
// }
// if (count == 0) {
//     console.log(number + 'là số ng tố');
// } else {
//     console.log(number + ' không là số ng tố');
// }
let number = 7;
let count = 0;
let N = 2;
let dem = 0;

if (count <= number) {
    // kiểm tra N là số nguyên tố? 
    // không là số nguyên tố: tăng N lên 1 đơn vị , kh tăng count 
    for (let i = 2; i < N - 1; i++) {
        if (N % i === 0) {
            dem++;
        }
    }
    if (dem == 0) {
        console.log(N);
        count++;
        N++;
    } else {
        N++;
    }
}