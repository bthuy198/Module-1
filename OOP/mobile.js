let Mobile = function (memoryArea) {
    this.memory = memoryArea;
    this.sentSMS = [];
    this.writingSMS = [];
    this.inbox = [];
    this.battery = function (battery) {
        return battery >= 0 || battery <= 100 ? this.battery = battery : this.battery = 100;
    }

    this.getBattery = function (){
        return this.battery;
    }

    this.checkOnOff = function () {
        if (this.battery > 0) {
            return true;
        } else return false;
    }

    // bật tắt điện thoại
    this.turnOnOff = function () {
        if (this.checkOnOff == true) {
            this.checkOnOff = false;
            return 'Turned off';
        } else {
            this.checkOnOff = true;
            return 'Turned on';
        }
    }

    this.charge = function () {
        this.battery++;
    }

    this.writeSMS = function (message) {
        if (this.checkOnOff == true) {
            this.writingSMS.push(message);
            this.memory--;
        } else return 'Phone is off. Please turn on to use';
    }

    this.receiveSMS = function (message) {
        if (this.checkOnOff == true) {
            this.inbox.push(message);
            this.memory--;
        } else return 'Phone is off. Please turn on to use';
    }

    // gửi tin nhắn đến đt khác
    this.send = function (message, receivePhone) {
        if (this.checkOnOff == true) {
            this.writingSMS.splice()
            this.sentSMS.push(message);
            receivePhone.inbox.push(message);
        } else{
            receivePhone.inbox = [];
            return 'Phone is off. Please turn on to use';
        }
    }

    // đọc tin nhắn đã gửi
    this.getSentSMS = function () {
        if (this.checkOnOff == true) {
            return this.sentSMS;
        } else return 'Phone is off. Please turn on to use';
    }

    // đọc tin nhắn đến
    this.getInbox = function () {
        if (this.checkOnOff == true) {
            return this.inbox;
        } else return 'Phone is off. Please turn on to use';
    }

    //sử dụng điện thoại 
    this.use = function () {
        if (this.checkOnOff == true) {
            this.battery--;
        }
    }
}
let nokia = new Mobile(100);
let iPhone = new Mobile(20);
nokia.battery(0);
console.log(nokia.checkOnOff());
nokia.send('Hi iPhone', iPhone);
console.log(nokia.getSentSMS());

// kiểm tra pin 
iPhone.battery(10);
console.log(iPhone.getBattery());

// kiểm tra tnhan đến
console.log(iPhone.getInbox());

nokia.use();
