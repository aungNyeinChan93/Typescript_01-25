export default function users() {


    const userName = (): void => {
        console.log('this is user name');
    }

    const run = (): void => {
        console.log('running');

    }

    return { userName, run }
}