// array

interface products {
    id: number,
    title: string,
    description: string,
    isStock: boolean
}

interface AddCategory extends products {
    category: string | null
}

// let products: AddCategory[] | products[] | Object[] = [];
let products: (AddCategory | products | Object)[] = [];

products[0] = { id: 1, title: 'p-1', description: 'p1-desc', isStock: true, category: 'category-1' };
products[1] = { id: 2, title: 'p-2', description: 'p2-desc', isStock: true };
products[2] = { type: 'object type array', test: new Object('test') };

products.push({
    id: 3,
    title: 'p-3',
    description: 'desc-3',
    isStock: false,
    category: null
})

products.forEach(p => console.log(p));

