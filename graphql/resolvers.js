import { getMovies } from './db';

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
};

export default resolvers;

    // , getById, deleteMovie, addMovie 
    
        // movie: (obj, { id }) => getById(id) 
        // aka args.id cuz obj destructuring
    // ,
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id)
    // }


// DOUBLE QUOTES for graphql
//  if const resolvers = { Query: { person: () => "dokinqs" } }