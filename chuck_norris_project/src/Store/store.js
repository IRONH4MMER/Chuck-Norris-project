import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootSaga } from './sagas/rootSaga'
import rootReducer from './reducers/rootReducer.js'
import createSagaMiddleware from 'redux-saga'


const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
    saga
)))

saga.run(rootSaga)

export default store