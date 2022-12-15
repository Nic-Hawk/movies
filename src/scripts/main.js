import { API_KEY } from "./secrets.js";

const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

async function getTrendingMoviesPreview() {
    
    const movieContainer = document.getElementById('movie-container');
    
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    const data = await res.json()

    const movies = data.results;
    console.log(data.results)

    movies.forEach(movie => {

        const movieImgContainer = document.createElement('div');
        movieImgContainer.classList.add('movie-img-container');

        const movieImg = document.createElement('img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', `${IMG_BASE_URL}${movie.poster_path}`);

        movieImgContainer.appendChild(movieImg);
        movieContainer.appendChild(movieImgContainer);

    });


}

getTrendingMoviesPreview()