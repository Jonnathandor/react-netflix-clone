import React, {useState, useEffect} from 'react'
import axios from './axios';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Row({ title, fetchURL }) {
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
                    return <img className="row__poster" src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.name}></img>
                })}
            </div>
        </div>
    )
}
