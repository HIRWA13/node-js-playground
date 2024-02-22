const people = ['junior', 'hirwa', 'dylan']
const newPeople = ['john', 'jacob']
const pets = ['luigi', 'mario']

// console.log(people)

/**
 * we can not have multiple module.exports in a single file
 * instead we will have to wrap the modules in an object and then we will export that object and use either dot notation or destructuring to access the exports.
 */

module.exports = {
    people, newPeople, pets
}