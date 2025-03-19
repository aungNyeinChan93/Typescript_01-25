"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNoti = exports.sendMail = void 0;
const sendMail = () => {
    const firstTimeLoginMail = () => {
        console.log('firstTimeLoginMail ');
    };
    const dailyNotification = () => {
        console.log('dailyNotification');
    };
    return { firstTimeLoginMail, dailyNotification };
};
exports.sendMail = sendMail;
const sendNoti = () => {
    const firstTimeNoti = () => {
        console.log('firstTimeNoti ');
    };
    return { firstTimeNoti };
};
exports.sendNoti = sendNoti;
