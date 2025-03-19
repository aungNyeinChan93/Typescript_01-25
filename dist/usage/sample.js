"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useAlert_1 = require("../composiable/useAlert");
const mailService = __importStar(require("../composiable/sendMail"));
const test_1 = __importDefault(require("../composiable/test"));
const products_1 = __importDefault(require("../composiable/products"));
const { logger } = (0, useAlert_1.useAlert)();
const { userName, run } = (0, test_1.default)();
const { p, getProducts } = (0, products_1.default)();
const { dailyNotification, firstTimeLoginMail } = mailService.sendMail();
const { firstTimeNoti } = mailService.sendNoti();
const mm_worker = {
    work: () => {
        console.log('work!');
    },
    eat: () => (console.log('eat')),
    sleep() {
        console.log('sleep');
    }
};
let name = 'aung';
logger(name);
console.log((0, useAlert_1.add)(1, 2));
useAlert_1.test === null || useAlert_1.test === void 0 ? void 0 : (0, useAlert_1.test)();
userName === null || userName === void 0 ? void 0 : userName();
run();
getProducts === null || getProducts === void 0 ? void 0 : getProducts();
firstTimeLoginMail();
dailyNotification();
firstTimeNoti();
mm_worker.eat();
mm_worker.sleep();
mm_worker.work();
