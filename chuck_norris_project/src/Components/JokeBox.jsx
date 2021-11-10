import '../App.css';
import React from "react";

function JokeBox(props) {

    return (
        <div className='JokeBox'>
            <p>
                {props.quote}
            </p>
        </div>
    );
}

export default JokeBox;
