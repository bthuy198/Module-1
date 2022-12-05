//Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let i1 = 0; i2 = 1; iN = 0;
let sum = 0;
for (let n = 1; n <= 10; n++) {
    iN = i1 + i2;
    sum += i1;
    i1 = i2;
    i2 = iN;
}
console.log(sum);