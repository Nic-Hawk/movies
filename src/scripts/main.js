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

async function getCategoriesPreview() {

    const res = await fetch (
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );

    const data = await res.json();
    const categories = data.genres;
    let len = categories.length;

    const cat1 = document.querySelector('.categoria1');
    const cat2 = document.querySelector('.categoria2');

    categories.forEach(category => {
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        const square = document.createElement('div');
        li.className = 'categoria';        
        square.classList.add('square');

        a.setAttribute('href', `./categoria.html?id=${category.id}`);
        a.textContent = category.name;
        li.appendChild(square);
        li.appendChild(a);

        // si es par, agregamos la categoría al contenedor1
        // si es impar, agregamos la categoría al contenedor2
        (len % 2 === 0 ? cat2 : cat1).appendChild(li);
        len--;
    });
}



getTrendingMoviesPreview();
getCategoriesPreview();