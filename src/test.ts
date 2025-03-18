const myName: string = 'aung aung';

console.log(myName);

class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const myDog = new Dog('aungnet', 3)

console.log(myDog.name);
console.log(myDog.age);

type customers = {
    name: string,
    type: string,
    active: boolean
}

type myCustomeType1 = {
    name: string,
    age: number,
    address: Object,
    languages: string[],
    marks: number[],
    students: { name: string, age: number }[],
    customers: customers[],
}



let age: number | string | boolean | myCustomeType1 = 4;

age = 'dsfasd';

let myObject: myCustomeType1 = {
    name: 'aung',
    age: 19,
    address: {
        street: 'no-67 road',
        township: 'ygn'
    },
    languages: ['HTML', 'CSS', "JS", 'TS', "VUE"],
    marks: [60, 70, 80, 80, 90],
    students: [
        { name: 'mgmg', age: 22 },
        { name: 'susu', age: 16 },
        { name: 'koko', age: 25 },
    ],
    customers: [
        { name: 'c1', type: 'gold', active: false },
        { name: 'c3', type: 'gold', active: false },
        { name: 'c3', type: 'normal', active: false },
    ]

}

console.log(myObject.name);
console.log(myObject.address);
console.log(myObject.languages);
console.log(myObject.languages[0]);
console.log(myObject.marks);
console.log(myObject.students);
console.log(myObject.students[0]);
console.log(myObject.students[0].name);
console.log(myObject.customers[2].name);
console.log(myObject.customers[2].type);

