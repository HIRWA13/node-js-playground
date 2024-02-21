const fs = require('fs')

// writing files

const newContent = fs.readFileSync('./docs/newContent.txt', (err, data) => {
    if(err) {
        return err.message
    }
    return data.toString();
})

fs.writeFile('./docs/blog1.txt', newContent, ()=> {
    console.log('file written successfully')
})


// reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err.message)
    }
    console.log(data.toString())
})

// directories


// deleting files