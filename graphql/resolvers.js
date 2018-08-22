import { getMovies, getById, deleteMovie, addMovie } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (obj, { id }) => getById(id) 
        // aka args.id cuz obj destructuring
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;

// DOUBLE QUOTES for graphql
//  if const resolvers = { Query: { person: () => "dokinqs" } }