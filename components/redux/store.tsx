import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";

const store = configureStore({
    reducer: rootreducer // yah jo naam dete hai wo wha use krte hai
})

export default store