// TS function

const output_1 = (a: number, b: boolean, c: Object, d: any[], e: any = 'default', f?: any[]): void => {

    console.log(a, b, c, d, e, f);

}
output_1(33, true, {}, ['susu', 'koko', [1, 2, 3]]);

// 
const add = (a: number, b: number): number => {
    return a + b;
}
const res = add(2, 3);
console.log(res);

// 
const myArray = (array: any[]): any[] => {
    return array;
}
console.log(myArray([1, 2, 3, 4]));

// 
type aungnyeinchan = {
    nickname: string,
    age: number,
    skills: any[]
}
const skills = (person: aungnyeinchan, ...other: any[]): any[] => {
    return [...['php', 'java', 'C#'], ...person.skills.map(s => s), ...other]
}
console.log(skills({ nickname: 'chan', age: 22, skills: ['html', 'css', 'js', 'vue', 'laravel', 'TS'] }, ...['python', 'Next', "React", 'Nest', 'Node', 'Express'], 'everything', 'all'));

