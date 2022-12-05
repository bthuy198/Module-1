class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        return this.weight--;
    }

    isEmpty() {
        if (this.weight == 0) {
            return true;
        } else return false;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender == true ? true : false;
        // if (this.gender == true) {
        //     return true;
        // } else return false;
    }

    setGender(gender) {
        return this.gender = gender;
    }

    checkApple(apple) {
        if (apple.getWeight() <= 0) {
            return false;
        } else return true;
    }

    eat(apple) {
        if (apple.weight >= 0) {
            return apple.weight--;
        } else return;
    }

    say(str) {
        return str;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        return this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        return this.weight = weight;
    }
}

let apple = new Apple();
let adam = new Human('Adam', true, 70);
let eva = new Human('Eva', false, 45);
adam.eat(apple);
eva.eat(apple);
console.log(apple.getWeight());
console.log(adam.getName());
console.log(adam.say('hi'));