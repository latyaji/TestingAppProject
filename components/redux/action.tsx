import { ADD_TO_CART } from "./constant";


export function addToCart(item) { // item mtlb UI mai jo name , color liye hai wo pura reducer ko bhej dege
    console.log("itemmm actionnnn mai",item);
    
    return {
        type : ADD_TO_CART,
        data : item // data payload bhi likh skte hai
    }
}