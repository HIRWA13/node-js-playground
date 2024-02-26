

// get expresss
const express = require("express");


// create express app by calling the express function
const app = express();

// set up the view engine
app.set('view engine', 'ejs')

// use the express function to create a server listening port number
app.listen(3000);

// app.get('/', (req, res) => {
//     res.send('<h1>This is an express home page</h1>')
// })

// use the express app to achieve routing

app.get("/", (req, res) => {
  const blogs = [
    { title: 'first blog', snippet: 'a snippet of the first blog' },
    { title: 'second blog', snippet: 'a snippet of the second blog'},
    { title: 'third blog', snippet: 'a snippet of the third blog'},
    { title: 'fourth blog', snippet: 'a snippet of the fourth blog'}
  ]
  res.render('index', { title: 'Home', blogs})
});

app.get("/about", (req, res) => {
  res.render('about', { title: 'About'})
});

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'Create a new Blog'})
})

app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})