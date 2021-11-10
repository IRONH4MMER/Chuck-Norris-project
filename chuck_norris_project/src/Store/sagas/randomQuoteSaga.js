import { takeEvery, put, call } from 'redux-saga/effects'
import {REQUEST_RAND_QUOTES, FETCH_QUOTES, SHOW_ALERT} from '../actionCreators/actions'

export function* sagaRandQuotesWatcher() {
    yield takeEvery(REQUEST_RAND_QUOTES, sagaWorker)
}

function* sagaWorker(action) {
    try {
        const dataFromServer = yield call(() =>
            fetch('https://api.chucknorris.io/jokes/random')
                .then(items => items.json())
        )
        yield put({ type: FETCH_QUOTES, payload: dataFromServer })
    } catch (error) {
        yield put({type: SHOW_ALERT, payload: `Нема постiв`})
        }
}