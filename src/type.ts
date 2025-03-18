
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


type sample = 'one' | 'two' | 'three';
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

type bigBoolean = false | true | null | undefined | '' | 'default';

let userAction: bigBoolean = false;
let userAction1: bigBoolean = true;
let userAction2: bigBoolean = null;
let userAction3: bigBoolean = '';
let userAction4: bigBoolean = undefined;
let userAction5: bigBoolean = 'default';
// let userAction6: bigBoolean = 'any';  // error




// output
console.log(post);
console.log(sample);
console.log(combine);
console.log(orType);
console.log(orType1);
console.log(userAction, userAction1, userAction2, userAction3, userAction4, userAction5);
