import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers/index'
import rootSaga from "./sagas";

const SagaMiddleware = createSagaMiddleware()

// @ts-ignore
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(SagaMiddleware)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

SagaMiddleware.run(rootSaga)
export default store;