var inputTemp = document.getElementById('number').value;
let temp = parseInt(inputTemp);
let result;
function convertTemp(temp){
    if (document.querySelector('[name="type"]').value == 'Fahrenheit') {
        result = (5 / 9) * (temp - 32);
        document.getElementById('result').innerHTML =  result + ' <sup>o</sup>C';
    } else {
        result = 1.8 * temp + 32;
        document.getElementById('result').innerHTML =  result + ' <sup>o</sup>F';
    }
}

