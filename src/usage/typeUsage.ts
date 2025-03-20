import { Logger, BigBoolean, UserInformations, About } from '../types/allTypes';

// Usage of Logger type
let logger: Logger = {
    log(message: string): void {
        console.log(message);
    },
    test(message: string): void {
        console.log(message);
    },
    add: (a: number, b: number): number => {
        return a + b;
    }
}

logger.log?.('This is a log message.');
logger.test?.('This is a test message.');

let res = logger.add?.(10, 20);
console.log(res);
"👍👍👍👍👍"


// Usage of BigBoolean type
let bigBool: BigBoolean;
console.log(bigBool); // undefined
bigBool = 'false'
console.log(bigBool); // 'false'
'🤦‍♂️🤦‍♂️🤦‍♂️'


// Usage of userInformations type
console.log('User Information:👇👇👇');

let mgmg: UserInformations = {
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

}
console.log(mgmg);
console.log(mgmg.name);
console.log(mgmg.hobbies);

let susu: UserInformations = {
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

}
console.log(susu);
console.log(susu.name);

// type with generics
// Generics allow you to create reusable components that can work with any data type.
// They are like templates that can be filled with different types when you use them.
// This is useful when you want to create functions, classes, or interfaces that can work with multiple types without losing type safety.
// For example, you can create a function that takes an array of any type and returns the first element of that array.
// This way, you can use the same function for arrays of numbers, strings, or any other type without having to write separate functions for each type.  

type Info<T, V> = {
    name: T;
    age: V;
    address: T;
}

const aboutMe = (info: Info<string, number>): void => {
    console.log(`My name is ${info.name}, I am ${info.age} years old, and I live in ${info.address}.`);
}
const john: Info<string, number> = {
    name: 'John', age: 30, address: 'New York'
}
aboutMe(john); // Output: My name is John, I am 30 years old, and I live in New York.


const myBio: About<string> = {
    bio: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
console.log(myBio.bio); // Output: lorem ipsum dolor sit amet, consectetur adipiscing elit.

const myBio1: About<number> = {
    bio: 12345,
}
console.log(myBio1.bio); // Output: 12345