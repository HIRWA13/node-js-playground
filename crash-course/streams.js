const fs = require('fs');

/**
 * createReadStream takes in two parameters: the path to the file to create a readStream from and an object which is optional and it is used to specify the chunk or data format
 */

const readStream = fs.createReadStream('./docs/largeFile.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/writeHere.txt', {encoding: 'utf8'})

// the on method is just an event listener and below we are listening to the data event and the call back function is called when the data event is emitted..
// readStream.on('data', (chunk) => {
//     console.log('------ New chunk: ')
//     console.log(chunk)
//     writeStream.write('\n\nNEW CHUNK\n\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)