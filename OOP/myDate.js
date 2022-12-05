let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        return this.day = day;
    }
    this.setMonth = function (month) {
        return this.month = month;
    }
    this.setYear = function (year) {
        return this.year = year;
    }

    this.setDate = function(day, month, year){
        return MyDate(this.day = day, this.month = month, this.year = year);
    }

    this.toString = function(){
        return `${this.day}/${this.month}/${this.year}`;
    }
}

let date = new MyDate(23,11,2022);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
date.setDate(19,8,2022)
console.log(date.toString());
date.setDay(20);
date.setYear(2021);
console.log(date.toString());
