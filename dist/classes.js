"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    logName() {
        console.log(`Animal name: ${this.name}`);
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is Woof! Woof`);
    }
}
exports.Dog = Dog;
