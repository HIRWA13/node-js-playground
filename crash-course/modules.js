const {people, pets} = require('./people')
// the xyz variable holds exported values from other files that we may need to use whenever we want, it is a list of exports that we want to access from another file
// when we execute the file(modules.js) and whenever it reaches or executes the xyz variable, it will run the people file but by running the file it does not mean that it has access to the contents of the file. 

// instead when we want to grant access to contents of the file we will need to export them for us to be able to access them from another file.

console.log(people)
console.log(pets)


// builtin node modules

const os = require('os');
console.log(os.platform(), os.homedir())

