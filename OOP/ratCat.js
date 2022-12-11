class Rat {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    say() {
        console.log('chít, chít');
    }
}

class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    say() {
        console.log('meo meo');
    }

    catchRat(rat) {
        if (rat.status == true && this.maxSpeed > rat.speed) {
            return true;
        } else return false;
    }

    eat(rat) {
        if (this.catchRat(rat)) {
            if (rat.status) {
                this.weight += rat.weight;
                return true;
            }
        }
    }
}

let babyRat = new Rat('baby', 500, 1, false);
let rat = new Rat('rat rat', 100, 3, false)
let bigCat = new Cat('Tom', 3000, 2);
bigCat.eat(babyRat);
bigCat.eat(rat);
console.log(bigCat.weight);
rat.say();