"use strict";
const myName = 'aung aung';
console.log(myName);
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const myDog = new Dog('aungnet', 3);
console.log(myDog.name);
console.log(myDog.age);
let age = 4;
age = 'dsfasd';
let myObject = {
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
};
let users = [];
users[0] = 'aungaung';
users[3] = 'koko';
let book = { name: '', author: '' };
book.name = 'Marvel';
book.author = 'stanLee';
let macBook = {
    model: 'mac book air',
    year: 2018
};
macBook.year = 2019;
let testObj = {
    name: 'testObj'
};
let myMac = {
    model: 'something',
    year: 2024
};
myMac.year = 2025;
let myMac2 = {
    model: 'something',
    year: 2027
};
myMac2.year = 2021;
let test2 = [
    {
        name: 'test-1',
        age: 21
    },
    {
        name: 'test-2',
        age: [11, 22, 3, 4, 2, 21]
    }
];
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
