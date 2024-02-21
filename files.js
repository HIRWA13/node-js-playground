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


// // reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err){
        console.log(err.message)
    }
    console.log(data.toString())
})



// directories
// creating and deleting folders

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err.message)
        }
        console.log('folder created successfully')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err.message)
        }
        console.log('folder deleted successfully')
    })
}


// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err.message)
        }
        console.log('file deleted already...')
    })
}