import { people, getById } from './db';

const resolvers = {
    Query: {
        people: () => people,
        person: (obj, { id }) => getById(id) 
        // aka args.id cuz obj destructuring
    }
};

export default resolvers;

// DOUBLE QUOTES if const resolvers = { Query: { person: () => "dokinqs" } }