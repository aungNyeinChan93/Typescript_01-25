import { Animal, Dog, Logger } from '../classes/classes';

// Usage of Animal class
// const dog = new Animal('Jack', 5, 'Puppy');   // !!abstract class cannot be instantiated directly
// console.log(dog);
// console.log(dog.name);
// dog.logName(); // Output: Animal name: Jack
// console.log(dog.getAge()); // Output: 5
// dog.setAge(6);
// console.log(dog.getAge()); // Output: 6


// Usage of Dog class 🐶🐶🐶
const Max: Dog = new Dog('Max', 3, 'Bulldog');
const Jack: Dog = new Dog('Jack', 5, 'Puppy');
const Charlie: Dog = new Dog('Charlie', 2, 'Beagle');
Max.bark(); // Output: Max is Woof! Woof
console.log(Max);

const myLogger = new Logger<string>('Hello, TypeScript!');
myLogger.log(); // Output: Log: Hello, TypeScript!

const myLogger2 = new Logger<number>(12345);
myLogger2.log(); // Output: Log: 12345

const dogs: Dog[] = [];
dogs.push(Max, Jack, Charlie); // Adding Dog objects to the array
console.log(dogs); // Output: [ Dog { name: 'Max', age: 3, species: 'Bulldog' } ]

const dogName = (dogs: Dog[]): string[] => { // dependency injection
    // dogs: Dog[] is the type of the parameter, Dog[] is an array of Dog objects
    return dogs.map(dog => dog.name)
}

// let dogNameResult = dogName([Max, Jack, Charlie]);
let dogNameResult = dogName(dogs); // Using the array of Dog objects
console.log(dogNameResult); // Output: [ 'Max', 'Jack' ]
