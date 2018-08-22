const dokinqs = {
    name: "Dokinqs",
    age: 24,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => dokinqs
    }
};

export default resolvers;

// MUST USE DOUBLE QUOTES 