let number = 10;
let count = 1;
let N = 3;
let range = 0;
let primeArr = [2];
// function tính range
function rangeN(num) {
    return Math.ceil(num / 2);
}
// ktra số nguyên tố
function isPrime(num, range) {
    range = rangeN(num);
    let count = 0;
    for (let i = 2; i <= range; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if (count === 0) {
        return true;
    } else {
        return false;
    }
}
// check count và in ra mảng 
while (count < number) {
    if (isPrime(N, range)) {
        count++;
        primeArr.push(N);
    }
    N++;
}
console.log(primeArr);