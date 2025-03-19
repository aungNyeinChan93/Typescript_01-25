"use strict";
const output_1 = (a, b, c, d, e = 'default', f) => {
    console.log(a, b, c, d, e, f);
};
output_1(33, true, {}, ['susu', 'koko', [1, 2, 3]]);
const add = (a, b) => {
    return a + b;
};
const res = add(2, 3);
console.log(res);
const myArray = (array) => {
    return array;
};
console.log(myArray([1, 2, 3, 4]));
const skills = (person, ...other) => {
    return [...['php', 'java', 'C#'], ...person.skills.map(s => s), ...other];
};
console.log(skills({ nickname: 'chan', age: 22, skills: ['html', 'css', 'js', 'vue', 'laravel', 'TS'] }, ...['python', 'Next', "React", 'Nest', 'Node', 'Express'], 'everything', 'all'));
