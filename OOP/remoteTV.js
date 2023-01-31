class Remote {
    constructor(id) {
        this.id = id;
    }

    changeChannel(toChannel) {
        return this.tv.channel = toChannel;
    }

    upVolume() {
        return this.tv.volume++;
    }

    downVolume() {
        return this.tv.volume--;
    }

    turnOn() {
        return this.tv.status = true;
    }

    turnOff() {
        return this.tv.status = false;
    }
}

class Tivi {
    constructor(remote, channel, volume, status) {
        this.remote_id = remote.id;
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    // getVolume() {
    //     return this.volume;
    // }

    // getChannel() {
    //     return this.channel;
    // }

    // setChannel(channel) {
    //     return this.channel = channel;
    // }

    // setVolume(volume) {
    //     return this.volume = volume;
    // }

    // setStatus(status) {
    //     return this.status = status;
    // }
}

let remote = new Remote(1);
let remote2 = new Remote(3);
let tv1 = new Tivi(remote, 4, 20, true);
let tv2 = new Tivi(remote2, 2, 10, false);

//test
remote.turnOff();
console.log(tv1.getStatus());