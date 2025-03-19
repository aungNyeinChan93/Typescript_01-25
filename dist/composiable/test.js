"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = users;
function users() {
    const userName = () => {
        console.log('this is user name');
    };
    const run = () => {
        console.log('running');
    };
    return { userName, run };
}
