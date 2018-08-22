import { getMovies, getById, deleteMovie, addMovie } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (obj, { id }) => getById(id) 
        // aka args.id cuz obj destructuring
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score)
    }
};

export default resolvers;

// DOUBLE QUOTES for graphql
//  if const resolvers = { Query: { person: () => "dokinqs" } }