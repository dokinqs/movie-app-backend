export let movies = [
    {
        id: 0,
        name: "Inception",
        score: 97
    },
    {
        id: 1,
        name: "Edge of Tomorrow",
        score: 98
    },
    {
        id: 2,
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
    if (cleanedMovies.length > movies.length) {
        // was a deletion, assign movie to new filtered array
        movie = cleanedMovies;
        return true;
    } else {
        return false;
    }
}