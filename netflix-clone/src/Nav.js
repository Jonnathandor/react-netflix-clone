import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {

    const [show, handleShow] = useState(false);

    // use Effect ... execute a piece of code under a specific condition
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener('scroll');
        };
    }, []); // when the component loads... attach a listener

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/110px-Netflix_2015_logo.svg.png"
            alt="Netflix"/>
            <img 
            className="nav__logo api-movie"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            alt="themoviedb"/>
        </div>
    )
}
