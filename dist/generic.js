"use strict";
var _a, _b;
const printMessage = (message) => {
    return message;
};
let message1 = printMessage('Hello, World!');
console.log(message1);
function plus(num1, num2) {
    return num1 + num2;
}
const result = plus(5, 10);
const result2 = plus('5', '10');
console.log(result);
console.log(result2);
function getLength(arg) {
    return arg.length;
}
const length1 = getLength('Hello');
const length2 = getLength([1, 2, 3]);
const length3 = getLength({ length: 10 });
console.log(length1);
console.log(length2);
console.log(length3);
const identity = (arg) => {
    return arg;
};
const identityString = (arg) => {
    return arg;
};
console.log(identity(5));
console.log(identityString('Hello'));
const user1 = {
    name: 'John',
    age: '30',
    send() {
        return this.name + ' ' + this.age;
    }
};
const user2 = {
    name: 1,
    age: 2,
    send() {
        return this.age;
    }
};
console.log((_a = user1.send) === null || _a === void 0 ? void 0 : _a.call(user1));
console.log((_b = user2.send) === null || _b === void 0 ? void 0 : _b.call(user2));
