import { Logger, BigBoolean, UserInformations } from '../types/allTypes';

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







