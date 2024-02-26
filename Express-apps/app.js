

// get expresss
const express = require("express");


// create express app by calling the express function
const app = express();

// use the express function to create a server listening port number
app.listen(3000);

// app.get('/', (req, res) => {
//     res.send('<h1>This is an express home page</h1>')
// })

// use the express app to achieve routing

app.get("/", (req, res) => {
  res.sendFile("./html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./html/about.html", { root: __dirname });
});

// express redirects: 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.use((req, res) => {
    res.status(404).sendfile('./html/404.html', {root: __dirname})
})