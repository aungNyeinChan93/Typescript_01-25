export default function products() {

    const p: any[] = ['p-1', 'p-2']
    const getProducts = (): void => {
        console.log(`${p.map(item => item)}`);
    }

    return { p, getProducts }
}