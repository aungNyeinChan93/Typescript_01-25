"use strict";
let post = {
    title: 'post one',
    description: 'post one desc',
    isActive: false
};
let sample = 'one';
sample = 'three';
let combine = {
    title: 'post one',
    description: 'post one desc',
    isActive: false,
    sample: 'one'
};
let orType = 'one';
let orType1 = {
    title: 'post one',
    description: 'post one desc',
    isActive: false
};
let userAction = false;
let userAction1 = true;
let userAction2 = null;
let userAction3 = '';
let userAction4 = undefined;
let userAction5 = 'default';
console.log(post);
console.log(sample);
console.log(combine);
console.log(orType);
console.log(orType1);
console.log(userAction, userAction1, userAction2, userAction3, userAction4, userAction5);
