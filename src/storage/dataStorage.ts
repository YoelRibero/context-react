import Product from 'types/product';

const saveLocalData = (dataName: string, data: Array<Product | number>) => {
    localStorage.setItem(dataName, JSON.stringify(data));
}

const getLocalData = (dataName: string) => {
    const data = localStorage.getItem(dataName)
    return data ? JSON.parse(data) : [];
}

export { saveLocalData, getLocalData }
