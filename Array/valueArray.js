let value = 'abc';
let arr = [1, 3, 5, 'food', 'drink'];
for (let i = 0; i < arr.length - 1; i++) {
    if(arr[i] == value){
        console.log('value ' + value + ' found at ' + i);
    }
}