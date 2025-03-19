"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.useAlert = void 0;
exports.add = add;
const useAlert = () => {
    const logger = (text) => {
        console.log(text);
    };
    return { logger };
};
exports.useAlert = useAlert;
const test = () => {
    console.log('test');
};
exports.test = test;
function add(a, b) {
    return a + b;
}
