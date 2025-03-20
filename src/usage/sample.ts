import { add, useAlert, test } from "../composiable/useAlert";
import * as mailService from '../composiable/sendMail'
import users from "../composiable/test";
import products from '../composiable/products'
import { HumanWorker } from '../interfaces/humanWorker'

const { logger } = useAlert();
const { userName, run } = users();
const { p, getProducts } = products();
const { dailyNotification, firstTimeLoginMail } = mailService.sendMail();
const { firstTimeNoti } = mailService.sendNoti();

const mm_worker: HumanWorker = {
    work: (): void => {
        console.log('work!');
    },
    eat: (): void => (console.log('eat')),
    sleep(): void {
        console.log('sleep');
    }
}

let name: string = 'aung';
logger(name)

console.log(add(1, 2));
test?.()
userName?.()
run()
getProducts?.();

firstTimeLoginMail();
dailyNotification();

firstTimeNoti();

mm_worker.eat();
mm_worker.sleep();
mm_worker.work();

// 👍👍👍👍🤣
