let Temperature = function (degree) {
    if (degree > -273) {
        this.degree = degree;
    }
    this.changeToFahrenheit = function () {
        return (this.degree * 1.8 + 32).toFixed(2);
    }
    this.changeToKelvin = function () {
        return (this.degree + 273.15).toFixed(2);
    }


}

let temp = new Temperature(-200.58475);
console.log('Độ F: ' + temp.changeToFahrenheit());
console.log('Độ K: ' + temp.changeToKelvin());