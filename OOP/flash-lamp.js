class Battery {
    constructor(battery) {
        this.battery = battery;
    }

    setEnergy(battery) {
        if (battery > 0) {
            return this.battery = battery;
        }
    }

    getEnergy() {
        if (this.battery > 0) {
            return this.battery;
        }
    }

    decreaseEnergy() {
        if (this.battery > 0) {
            return this.battery--;
        }
    }
}

class FlashLamp {
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    setBattery(battery) {
        return this.battery = battery;
    }

    getBattery() {
        return this.battery.getEnergy();
    }

    light(){
        if (this.status){
            console.log('Lighting');
        }
        else {
            console.log('Not lighting');
        }
    }

    turnOn(){
        if (this.battery > 0){
            return this.status = true;
        } else return this.status = false;
    }

    turnOff(){
        if (this.battery <= 0){
            return this.status = false;
        } else return this.status = true;
    }
}

let battery = new Battery(10);
// let lamp = new FlashLamp(true, 100);
// console.log(lamp.getBattery());
console.log(battery.getEnergy());
let lamp = new FlashLamp(true, battery);
console.log(lamp.getBattery());