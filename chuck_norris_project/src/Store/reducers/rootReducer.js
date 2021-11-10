import { combineReducers } from 'redux';

import {quoteReducer} from "./quoteReducer";
import {categoriesReducer} from "./categoriesReducer";

export default combineReducers({
    postsReducer: quoteReducer,
    categoriesReducer
})