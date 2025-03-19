"use strict";
var _a, _b;
class Boy {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    play(something) {
        console.log(`${this.name} is playing ${something}`);
    }
}
const john = new Boy('aung');
let koko = new Boy('koko');
console.log(john);
john.eat();
koko.play("football");
const kitty = {
    name: 'kitty',
    eat() {
        console.log('eating');
    },
    sleep() {
        console.log('sleeping');
    },
    getName() {
        return this.name;
    }
};
kitty.sleep();
console.log((_a = kitty.getName) === null || _a === void 0 ? void 0 : _a.call(kitty));
let worker1 = {
    name: 'worker-1',
    eat() {
        console.log('eating');
    },
    sleep() {
        console.log('sleeping');
    },
    work() {
        console.log('working');
    }
};
console.log(worker1);
(_b = worker1 === null || worker1 === void 0 ? void 0 : worker1.work) === null || _b === void 0 ? void 0 : _b.call(worker1);
const superWorker = {
    name: 'worker-1',
    eat() {
        console.log('eating');
    },
    sleep() {
        console.log('sleeping');
    },
    work() {
        console.log('working');
    },
    superWork() {
        console.log('superWork');
    }
};
console.log(superWorker);
