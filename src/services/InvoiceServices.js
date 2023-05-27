import { invoice } from "../data/data"

export const invoiceService = () => {
    
    const total=invoice.items.reduce(
        (acc, product) => acc + product.price * product.quantity, 0
    );    
    return {...invoice, total: total}
}

export const invoiceTotal = (invoiceObj) =>{
    const totalDinamic = invoiceObj.reduce(
        (acc, product) => acc + product.price * product.quantity, 0
    );    
    return totalDinamic
}