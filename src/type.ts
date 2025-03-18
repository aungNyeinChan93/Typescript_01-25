type sample = 'one' | 'two' | 'three';

type post = {
    title: string,
    description: string,
    isActive: Boolean
}

let post: post = {
    title: 'post one',
    description: 'post one desc',
    isActive: false
}


let sample: sample = 'one';

sample = 'three'  //if add four ->error

// & and |
type combine = post & { sample: sample };
type orType = post | sample;

let combine: combine = {
    title: 'post one',
    description: 'post one desc',
    isActive: false,
    sample: 'one'
};

let orType: orType = 'one'
let orType1: orType = {
    title: 'post one',
    description: 'post one desc',
    isActive: false
}

// output
console.log(post);
console.log(sample);
console.log(combine);
console.log(orType);
console.log(orType1);