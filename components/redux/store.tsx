import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";

import createSagaMiddleware from 'redux-saga'
import sagaData from "./saga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootreducer,
    middleware : ()=>[sagaMiddleware]
})
sagaMiddleware.run(sagaData)

export default store         