"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = products;
function products() {
    const p = ['p-1', 'p-2'];
    const getProducts = () => {
        console.log(`${p.map(item => item)}`);
    };
    return { p, getProducts };
}
