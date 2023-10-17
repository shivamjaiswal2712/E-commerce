// For Add item to cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}