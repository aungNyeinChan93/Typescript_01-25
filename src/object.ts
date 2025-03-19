// Object in TS

let manU = {
    name: 'red devil',
    goalKeeper: 'Onana',
    Champions_League: 2,
}
manU.Champions_League = 30;


let realMadrid: { name: string, Champions_League: number | '' };

realMadrid = {
    name: "test",
    Champions_League: 60
}
realMadrid.name = 'UEFA King';
realMadrid.Champions_League = 15;

interface Arsenal {
    name: string
    Champions_League: null
}
let arsenal: Arsenal = {
    name: 'Gunner',
    Champions_League: null
}


// 
console.log(manU);
console.log(realMadrid);
console.log(arsenal);
