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

// nested type
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

// array and obj
let users: string[] = [];

users[0] = 'aungaung';
users[3] = 'koko';

let book: { name: string, author: string } = { name: '', author: '' };

book.name = 'Marvel';
book.author = 'stanLee'

let macBook: { model: string, year: number } = {
    model: 'mac book air',
    year: 2018
}
macBook.year = 2019;

let testObj: Object = {
    name: 'testObj'
};
// testObj.name = 'change'  // error

// interface and type
interface MacBook {
    model: string,
    year: number | string
}

type MacBook2 = {
    model: string,
    year: number
}

let myMac: MacBook = {
    model: 'something',
    year: 2024
}
myMac.year = 2025;

let myMac2: MacBook2 = {
    model: 'something',
    year: 2027
}
myMac2.year = 2021;

// type
type myCustomeType2 = [
    {
        name: string,
        age: number
    },
    {
        name: string,
        age: number | number[]
    }
]

let test2: myCustomeType2 = [
    {
        name: 'test-1',
        age: 21
    },
    {
        name: 'test-2',
        age: [11, 22, 3, 4, 2, 21]
    }
]

// Extending interface 
interface Person {
    name: string;
}
interface Employee extends Person {
    role: string;
}
const emp: Employee = { name: "Alice", role: "Developer" };

// Type uses intersections (&) for extension:
type Person1 = { name: string };
type Employee1 = Person1 & { role: string };

const emp1: Employee1 = { name: "Alice", role: "Developer" };




// output section
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

console.log(users);
console.log(book);
console.log(macBook.year);
console.log(myMac.year);
console.log(myMac2.year);

console.log(test2[1]);

