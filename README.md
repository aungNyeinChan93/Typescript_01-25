# Typescript Tutorial-01

This repository contains TypeScript code examples and exercises to help you learn and practice TypeScript concepts. Whether you're a beginner or looking to enhance your TypeScript skills, this project provides a structured and hands-on approach.

## Project Structure

```
/D:/VS_Code/Typescript_25/CodeHub_tuto_01/
├── src/          # Source code files
│   ├── examples/ # Example TypeScript files
│   └── exercises/ # Practice exercises
├── dist/         # Compiled JavaScript files
├── tsconfig.json # TypeScript configuration file
└── readme.md     # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended).
- [TypeScript](https://www.typescriptlang.org/) globally installed. You can install it using:
  ```bash
  npm install -g typescript
  ```
- A code editor like [Visual Studio Code](https://code.visualstudio.com/) for an optimal development experience.

## Getting Started

Follow these steps to set up and run the project:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd CodeHub_tuto_01
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the TypeScript code:

   ```bash
   tsc
   ```

4. Run the project:

   ```bash
   node dist/index.js
   ```

5. Explore the `src/` directory to review and modify the TypeScript examples and exercises.

## Features

This project includes the following features:

- **TypeScript Basics**: Learn about variables, types, and basic syntax.
- **Advanced Concepts**: Explore interfaces, classes, generics, and modules.
- **Hands-On Exercises**: Practice your skills with real-world scenarios.
- **Code Examples**: Pre-written examples to demonstrate key concepts.
- **Scalable Structure**: Organized project layout for easy navigation.

## How to Use

- Start by reviewing the examples in the `src/examples/` directory to understand the concepts.
- Move on to the exercises in the `src/exercises/` directory to test your knowledge.
- Modify and experiment with the code to deepen your understanding.

## Contributing

We welcome contributions to improve this project! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request to the main repository.

# TypeScript CodeHub Tutorial

This project demonstrates various TypeScript features, including classes, interfaces, generics, enums, tuples, and more. It is structured to showcase best practices and practical examples for learning and using TypeScript effectively.

## Project Structure

├── README.md ├── tsconfig.json └── src/ ├── any.ts ├── app.ts ├── array.ts ├── enum.ts ├── function.ts ├── generic.ts ├── interface.ts ├── object.ts ├── test.ts ├── tuple.ts ├── type.ts ├── classes/ │ └── classes.ts ├── composiable/ │ ├── products.ts │ ├── sendMail.ts │ ├── test.ts │ └── useAlert.ts ├── interfaces/ │ ├── baseWorker.ts │ ├── humanWorker.ts │ └── mixedInterfaces.ts ├── types/ │ └── allTypes.ts └── usage/ ├── classUsage.ts ├── sample.ts └── typeUsage.ts

## Features

### 1. Classes and Inheritance

- **Abstract Classes**: The `Animal` class demonstrates abstraction.
- **Inheritance**: The `Dog` class extends `Animal` and adds specific behavior like `bark`.

Example:

```typescript
const Max: Dog = new Dog("Max", 3, "Bulldog");
Max.bark(); // Output: Max is Woof! Woof
```

### 2. Generics

- \*\*Generic Functions: Functions like printMessage and plus demonstrate the use of generics.
- \*\*Generic Classes: The Logger class is a generic class that logs messages of any type.

Example:

```typescript
const myLogger = new Logger<string>("Hello, TypeScript!");
myLogger.log(); // Output: Log: Hello, TypeScript!

```

### 3. Interfaces

Extending Interfaces: Interfaces like HumanWorker extend BaseWorker to add more functionality.
Usage in Classes: The Boy class implements the Human interface.

```typescript
interface Human {
    readonly name: string;
    eat(): void;
    sleep(): void;
}
```

### 4. Enums

Demonstrates the use of numeric and string enums for better code readability.

Example:

```typescript
enum Status {
    Pending,
    InProgress,
    Completed,
    Failed
}

```

### 5. Tuples

Demonstrates fixed-length arrays with specific types for each index.

Example:

```typescript
let rates: [string, number, any[]?];
rates = ["mgmg", 12, []];

```

### 6. Dependency Injection

Functions like dogName demonstrate dependency injection by accepting typed parameters.

Example:

```typescript
const dogName = (dogs: Dog[]): string[] => dogs.map(dog => dog.name);

```


## Link
This [README.md](http://_vscodecontentref_/3) file consolidates all the information into a single, well-structured document. Let me know if you need further adjustments!


