export const useAlert = () => {

    const logger = (text: string): void => {
        console.log(text);
    }
    return { logger }
}

export const test = () => {
    console.log('test');
}

export function add(a: number, b: number): number {
    return a + b;
}