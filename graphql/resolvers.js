import { getMovies, getById } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (obj, { id }) => getById(id) 
        // aka args.id cuz obj destructuring
    }
};

export default resolvers;

// DOUBLE QUOTES if const resolvers = { Query: { person: () => "dokinqs" } }