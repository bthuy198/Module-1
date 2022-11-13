var inputCurr = document.getElementById('number').value;
var result;
function convertCurr(inputCurr) {
    let curr = parseFloat(inputCurr);
    switch (document.querySelector('[name="currency-from"]').value) {
        case 'USD':
            if (document.querySelector('[name="currency-to"]').value == 'VNĐ') {
                result = curr * 23000;
                document.getElementById('result').innerHTML = result;
            }
            else {
                document.getElementById('result').innerHTML = curr;
            }
            break;
        case 'VNĐ':
            if (document.querySelector('[name="currency-to"]').value == 'USD') {
                result = curr / 23000;
                document.getElementById('result').innerHTML = result;
            }
            else {
                document.getElementById('result').innerHTML = curr;
            }
            break;
    }
}

