export const people = [
    {
        id: 0,
        name: "Dokinqs",
        age: 24,
        gender: "female"
    },
    {
        id: 1,
        name: "Karen",
        age: 21,
        gender: "female"
    },
    {
        id: 2,
        name: "Tom Cruise",
        age: 56,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
};