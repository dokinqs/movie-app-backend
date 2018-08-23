import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";

const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating, sort) => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(LIST_MOVIES_URL, {
        params: {
            limit,
            minimum_rating: rating,
            sort_by: sort
        }
    });
    return movies;
}

export const getMovie = async id => {
    const {
        data: {
            data: { movie }
        }
    } = await axios(MOVIE_DETAILS_URL, {
        params: {
            movie_id: id
        }
    })
    return movie;
}

export const getSuggestions = async id => {
    const {
        data: {
            data: { movies }
        }
    } = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
}

// https://yts.am/api/v2/list_movies.json?minimum_rating=4&limit=5&sort_by=title default desc so reverse alphabetical order
// https://yts.am/api/v2/movie_details.json?movie_id=8677