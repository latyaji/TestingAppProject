import { Add_To_Cart, Remove_From_Cart } from "./constant";

export function addToCart(item) {

    return {
        type: Add_To_Cart,
        data: item
    }
}

export function removeFromCart(item) {
    
    return {
        type: Remove_From_Cart,
        data: item
    }
}