// TS Tuple Array

let rates: [string, number, any[]?];

rates = ['mgmg', 12, []]

console.log(rates);
console.log(rates[1]);

rates[2] = new Array('koko', 'mgmg', 'susu')
console.log(rates);

// readOnly tuple
const marks: readonly [number, number, string?, ...any[]] = [100, 80, , ...['one', false, null]];
console.log(marks);



/**
✔️ When you need fixed-length data structures
✔️ When each element has a specific type
✔️ When returning multiple values from a function

## Summary
Tuples are fixed-size arrays with specific types for each index.
Use readonly to prevent modification.
Tuples can contain optional (?) and rest (...) elements.
They ensure strong type-checking while allowing array methods.

 */