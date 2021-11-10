import React, {useEffect} from 'react';
import '../App.css'
import {REQUEST_CATEGORIES, REQUEST_QUOTES, REQUEST_RAND_QUOTES} from "../Store/actionCreators/actions";
import {useDispatch, useSelector} from "react-redux";


function Categories() {

    const dispatch = useDispatch()

    const handleClick = function(event) {
        dispatch({type: REQUEST_QUOTES, payload: event.target.name})
    }

    let i = 0;

    useEffect(() => {
        dispatch({type: REQUEST_CATEGORIES})
    }, [dispatch])

    const categoriesRequest = useSelector(state => state.categoriesReducer.fetchedCategories)

function mapCategories() {
    if (categoriesRequest && categoriesRequest !== []) {
        return categoriesRequest.map(category => (
            <button name={category} className='Category' key={i++} onClick={handleClick}>
                {category}
            </button>
        ))
    } else {
        return (<></>)
    }
}

return (
    <div id='categoriesBox'>
        {mapCategories()}
        <button className='Category' key={i++} onClick={() => {
            dispatch({type: REQUEST_RAND_QUOTES})
        }}>
            random
        </button>
    </div>
)
}

export default Categories