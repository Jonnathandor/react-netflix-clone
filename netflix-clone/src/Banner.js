import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

export default function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length - 1))
                ]
            );
            return request;
        }

        fetchData();
    }, []); // if there is nothing inside the array... then this runs on load

    function truncate(str, num) {
        console.log(str);
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
    }

    return (
        <header className="banner"
        style={
            {
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }
        }
        >
            <div className="banner__contents">
                <h1>
                    { movie?.title || movie?.name || movie?.orinal_name }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
                {/* <h1 className="banner__description">{movie?.overview}</h1> */}
            </div>
            <div className="banner__fade--bottom"></div>
        </header>
    )
}
