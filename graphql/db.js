let movies = [
    {
        id: 1,
        name: "Inception",
        score: 97
    },
    {
        id: 2,
        name: "Edge of Tomorrow",
        score: 98
    },
    {
        id: 3,
        name: "Mission Impossible",
        score: 99
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    if (movies.length > cleanedMovies.length) {
        // was a deletion, assign movie to new filtered array
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        // not good id cuz if only one undeleted movie left id would be 2 even if undeleted movie had id of 3 
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}