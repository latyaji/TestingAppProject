import { Add_To_Cart, SET_USER_DATA, Remove_From_Cart } from './constant'

const initialState = []

export const reducer = (state = initialState, action) => { // action parameter action file ka hai
    switch (action.type) {
        case Add_To_Cart:
            return [
                ...state,
                action.data
            ]
        case Remove_From_Cart:
            let result = state.filter(item => {
                return item.name != action.data
            })
            return [...result]
        case SET_USER_DATA:
            return [
                // ...state,
                action.data
            ]
        default:
            return state


    }

}