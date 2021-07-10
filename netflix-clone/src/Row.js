import React, {useState, useEffect} from 'react'
import axios from './axios';
import './Row.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export default function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // runs based on a specific condition in this case
    // make a request when the row loads on the DOM
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    return <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__poster--large"}`}
                    src={`${BASE_IMAGE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                    alt={movie.name}></img>
                })}
            </div>
        </div>
    )
}
