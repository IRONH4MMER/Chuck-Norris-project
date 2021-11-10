import {FETCH_CATEGORIES} from '../actionCreators/actions'

const initialState = {
    fetchedCategories: [],
    fetched: false
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, fetchedCategories: action.payload}
        default:
            return state
    }
}