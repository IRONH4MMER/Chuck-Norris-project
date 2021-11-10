import {FETCH_QUOTES} from '../actionCreators/actions'

const initialState = {
    fetchedQuotes: {},
    fetched: false
}

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTES:
            return {...state, fetchedQuotes: action.payload}
        default:
            return state
    }
}