function generateArray(size, min, max){
    let array = new Array(size);
    for(let i =0; i < array.length; i++){
        array[i] = Math.floor(Math.random()*(max - min + 1) + min);
    }
    // console.log(array);
    return array;
}

console.log(generateArray(20, 23, 79));
console.log(generateArray(10, 10, 50));
document.getElementById('heading1').innerHTML = generateArray(20, 23, 79);