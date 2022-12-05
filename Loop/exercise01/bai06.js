let count = 0;
let sum = 0;
for (let i = 1; count < 4; i++) {
    if (i % 7 === 0) {
        sum += i;
        console.log(i);
        count++;
    }
}
console.log(sum);