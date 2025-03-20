// Generic

const printMessage = <T>(message: T): T => {
    return message;
};

// Usage of printMessage function
let message1 = printMessage<string>('Hello, World!');
console.log(message1); // Output: Hello, World! 

// 
function plus<T>(num1: T, num2: T): T {
    return (num1 as unknown as number) + (num2 as unknown as number) as T;
}
const result = plus<number>(5, 10);
const result2 = plus<string>('5', '10'); // This will not work as expected, but TypeScript will allow it
console.log(result);
console.log(result2); // Output: 510 (string concatenation)

// Using generic constraints
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}
const length1 = getLength<string>('Hello'); // Output: 5
const length2 = getLength<number[]>([1, 2, 3]); // Output: 3
const length3 = getLength<{ length: number }>({ length: 10 }); // Output: 10
console.log(length1);
console.log(length2);
console.log(length3);

// Using generic interfaces
interface GenericIdentityFn<T> {
    (arg: T): T;
}
const identity: GenericIdentityFn<number> = (arg: number): number => {
    return arg;
}
const identityString: GenericIdentityFn<string> = (arg: string): string => {
    return arg;
}
console.log(identity(5)); // Output: 5
console.log(identityString('Hello')); // Output: Hello


interface user<T = string> {
    name: T,
    age: T,
    send?(): T
}


const user1: user<string> = {
    name: 'John',
    age: '30',
    send() {
        return this.name + ' ' + this.age;
    }
}
const user2: user<number> = {
    name: 1,
    age: 2,
    send() {
        return this.age;
    }
}

console.log(user1.send?.()); // Output: John 30
console.log(user2.send?.()); // Output: 2
