"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
let logger = {
    log(message) {
        console.log(message);
    },
    test(message) {
        console.log(message);
    },
    add: (a, b) => {
        return a + b;
    }
};
(_a = logger.log) === null || _a === void 0 ? void 0 : _a.call(logger, 'This is a log message.');
(_b = logger.test) === null || _b === void 0 ? void 0 : _b.call(logger, 'This is a test message.');
let res = (_c = logger.add) === null || _c === void 0 ? void 0 : _c.call(logger, 10, 20);
console.log(res);
"👍👍👍👍👍";
let bigBool;
console.log(bigBool);
bigBool = 'false';
console.log(bigBool);
'🤦‍♂️🤦‍♂️🤦‍♂️';
console.log('User Information:👇👇👇');
let mgmg = {
    name: 'mgmg ',
    age: 30,
    email: 'test@123',
    isActive: true,
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'gaming'],
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: false,
    isVerified: true,
    phone: '123-456-7890',
    profilePicture: 'profile.jpg',
    bio: 'This is a bio',
    website: 'https://example.com'
};
console.log(mgmg);
console.log(mgmg.name);
console.log(mgmg.hobbies);
let susu = {
    name: 'susu',
    age: 25,
    email: 'susu@123',
    isActive: false,
    address: {
        street: '456 Elm St',
        city: 'Los Angeles',
        country: 'USA'
    },
    hobbies: ['cooking', 'traveling'],
    createdAt: new Date(),
    updatedAt: new Date(),
    isAdmin: true,
    isVerified: false,
    phone: '987-654-3210',
    profilePicture: 'profile.jpg',
    bio: 'This is a bio',
    website: 'https://example.com'
};
console.log(susu);
console.log(susu.name);
const aboutMe = (info) => {
    console.log(`My name is ${info.name}, I am ${info.age} years old, and I live in ${info.address}.`);
};
const john = {
    name: 'John', age: 30, address: 'New York'
};
aboutMe(john);
