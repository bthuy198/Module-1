let num = [1, 3, 1, 8, 5, 10, 20];
let arr = [1, 10, 100, 99, 4, 6, 3, 5, 9, 0]
let temp = 0;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            //đổi chỗ
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);