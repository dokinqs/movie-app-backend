import { getMovies, getMovie, getSuggestions } from './db';

const resolvers = {
    Query: {
        movies: (_, { limit, rating, sort }) => getMovies(limit, rating, sort),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;

// query {
//     movie(id: 8677){
//       id
//       title
//       description_intro
//     }
//     suggestions(id: 8677) {
//       id
//       title
//       genres
//     }
//   }