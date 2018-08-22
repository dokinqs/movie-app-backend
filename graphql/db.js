import fetch from "node-fetch";
const API_URL="https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0 ) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0 ) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
            .then(res => res.json())
            .then(json => json.data.movies);
};


// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => id === movie.id);
//     return filteredMovies[0];
// };

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => id !== movie.id);
//     if (movies.length > cleanedMovies.length) {
//         // was a deletion, assign movie to new filtered array
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         // not good id cuz if only one undeleted movie left id would be 2 even if undeleted movie had id of 3 
//         id: `${movies.length + 1}`,
//         name,
//         score
//     }
//     movies.push(newMovie);
//     return newMovie;
// }