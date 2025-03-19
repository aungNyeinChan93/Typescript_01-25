export const sendMail = () => {
    const firstTimeLoginMail = (): void => {
        console.log('firstTimeLoginMail ');
    }

    const dailyNotification = (): void => {
        console.log('dailyNotification');
    }

    return { firstTimeLoginMail, dailyNotification }
}

export const sendNoti = () => {
    const firstTimeNoti = (): void => {
        console.log('firstTimeNoti ');
    }
    return { firstTimeNoti }
}