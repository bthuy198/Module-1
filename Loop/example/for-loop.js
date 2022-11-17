let i = 0;
// while (i < 100) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// do {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
//     i++;
// } while (i < 100);
let count = 0;
do {
    count++;
    console.log(count); //1 3 5 7 9 11
} while (count++ < 10);
console.log(count);

