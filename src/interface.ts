// interface TS

interface Human {
    readonly name: string,
    eat(): void,
    sleep(): void,
    getName?(): string
}

// use in class
class Boy implements Human {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    eat(): void {
        console.log(`${this.name} is eating`);
    }
    sleep(): void {
        console.log(`${this.name} is sleeping`);
    }
    play(something?: string | any): void {
        console.log(`${this.name} is playing ${something}`);
    }
}
const john: Boy = new Boy('aung');
let koko: Boy = new Boy('koko');

console.log(john);
john.eat();
koko.play("football");

// type in object
const kitty: Human = {
    name: 'kitty',
    eat() {
        console.log('eating');
    },
    sleep() {
        console.log('sleeping');
    },
    getName(): string {
        return this.name;
    }
}
kitty.sleep();
console.log(kitty.getName?.());

// interface can extend 
interface HUmanWorker extends Human {
    work(): void,
}

let worker1: HUmanWorker = {
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
}
console.log(worker1);
worker1?.work?.();

// multi extends
interface SuperWorker extends Human, HUmanWorker {
    superWork(): void,
}

const superWorker: SuperWorker = {
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
}
console.log(superWorker);





