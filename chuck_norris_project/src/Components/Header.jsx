import '../App.css';
import React from "react";

function Header(props) {
    return (
        <div className='header'>
            <img className='logo' src={props.logoUrl} alt={props.logoUrl}/>
            <p className='header__text'>Chuck Norris</p>
        </div>
    );
}

export default Header;
