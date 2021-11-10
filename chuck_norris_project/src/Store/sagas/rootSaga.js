import { fork } from 'redux-saga/effects'

import {sagaCategoriesWatcher} from "./categoriesSaga";
import {sagaRandQuotesWatcher} from "./randomQuoteSaga";
import {sagaQuotesWatcher} from "./quoteSaga";

export function* rootSaga() {
    yield fork(sagaRandQuotesWatcher)
    yield fork(sagaCategoriesWatcher)
    yield fork(sagaQuotesWatcher)
}