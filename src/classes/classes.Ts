// Classes in TypeScript
// Classes in TypeScript are similar to classes in other object-oriented programming languages.
// They allow you to create objects with properties and methods, encapsulating data and behavior together. 
// TypeScript also supports features like inheritance, access modifiers, and interfaces for better type safety and code organization.

export abstract class Animal {
    name: string;
    private age: number;
    readonly species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    logName(): void {
        console.log(`Animal name: ${this.name}`);
    }

}

interface DogInterface {
    bark(): void;
}

export class Dog extends Animal implements DogInterface {
    bark(): void {
        console.log(`${this.name} is Woof! Woof`);
    }
}

export class Logger<T> {
    private readonly message: T;

    constructor(message: T) {
        this.message = message;
    }

    log(): void {
        console.log(`Log: ${this.message}`);
    }
}
