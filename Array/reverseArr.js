let a = [1, 0, 4, 7, 10, 11, 20, 24, 3, 19];
let first = 0;
let last = a.length - 1;
let reverse_a = [];
for (last; last >= first; last--) {
    reverse_a.push(a[last]);
}
console.log(reverse_a);