import { takeEvery, put, call } from 'redux-saga/effects'
import {REQUEST_CATEGORIES, FETCH_CATEGORIES, SHOW_ALERT} from '../actionCreators/actions'

export function* sagaCategoriesWatcher() {
    yield takeEvery(REQUEST_CATEGORIES, sagaWorker)
}

function* sagaWorker(action) {
    try {
        const dataFromServer = yield call(() =>
            fetch('https://api.chucknorris.io/jokes/categories')
                .then(items => items.json())
        )
        yield put({ type: FETCH_CATEGORIES, payload: dataFromServer })
    } catch (error) {
        yield put({type: SHOW_ALERT, payload: `Нема постiв`})
    }
}