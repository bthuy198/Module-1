class Lamp {
    constructor(status) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        return this.status = status;
    }
    turnOn() {
        return this.status;
    }

    turnOff() {
        return this.status;
    }

}

class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    getLamp() {
        return this.lamp;
    }

    setLamp(lamp) {
        return this.lamp = lamp;
    }

    connectToLamp(lamp) {
        return this.lamp = lamp;
    }

    switchOff() {
        this.lamp.status = false;
        return this.status = false;
    }

    switchOn() {
        this.lamp.status = true;
        return this.status = true;
    }
}

let lamp = new Lamp(true);
let switchBtn = new SwitchButton(false, lamp);
switchBtn.switchOff();
console.log(switchBtn.status);
