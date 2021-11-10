import { takeEvery, put, call } from 'redux-saga/effects'
import {REQUEST_QUOTES, FETCH_QUOTES, SHOW_ALERT} from '../actionCreators/actions'

export function* sagaQuotesWatcher() {
    yield takeEvery(REQUEST_QUOTES, sagaWorker)
}

function* sagaWorker(action) {
    try {
        let url = 'https://api.chucknorris.io/jokes/random?category={' + action.payload+'}';
        const options = { method: "GET",
            headers: { "Accept": "application/json" }};
        const dataFromServer = yield call(() =>
        fetch(url, options)
                .then(items => items.json())
        )
        yield put({ type: FETCH_QUOTES, payload: dataFromServer })
    } catch (error) {
        yield put({type: SHOW_ALERT, payload: `Нема постiв`})
    }
}