import Header from "./Header";
import CategoryTitle from "./CategoryTitle";
import JokeBox from "./JokeBox";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {REQUEST_RAND_QUOTES} from "../Store/actionCreators/actions";
import ChuckImg from "./ChuckImg";
import Categories from "./Categories";

function Page() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: REQUEST_RAND_QUOTES})
    }, [dispatch]);

    const randomQuoteRequest = useSelector(state => state.postsReducer.fetchedQuotes)

    const quote = randomQuoteRequest.value
    const logoUrl = randomQuoteRequest.icon_url

    return (
        <div id='body'>
            <Header logoUrl={logoUrl}/>
            <CategoryTitle />
            <Categories />
            <ChuckImg />
            <JokeBox quote={quote}/>
        </div>
    );
}

export default Page;
