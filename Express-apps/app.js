// get expresss
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();


// const blogRoutes = require('../routes/blogRoutes')

const mainRoute = require('../routes/routes')

// get models
// const Blog = require('../models/blog')

// create express app by calling the express function
const app = express();

// db URI
const DBURI = process.env.DBURI;

// connect to mongoDb database
mongoose
  .connect(DBURI)
  .then((result) => app.listen(3000)) // only listen to the port number when the connection to the database has already been estabished...
  .catch((err) => console.log(err));

// set up the view engine
app.set("view engine", "ejs");


// middlewares and static files (css, images, javascript, etc)

app.use(morgan("dev"));

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))


// mongoose and mongo sandbox(test) routes

// create a blog
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'my third blog',
//     snippet: 'the third blog  written by me',
//     body: 'all about my third blog that I published on node js topics'
//   });

//   blog.save().then((result) => res.send(result)).catch((err) => console.log(err))
// })
// // getting all blog posts
// app.get('/all-blogs', (req, res) => {
//   Blog.find().then((result) => res.send(result)).catch((err) => console.log(err))
// })

// // getting a single blog post
// app.get('/single-blog', (req,res) => {
//   Blog.findById("65e1a1fc98a9a55bf9b8bf96")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// })


// use the express app to achieve routing

app.get("/", (req, res) => {
 res.redirect('/blogs')
});


app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});


app.use(mainRoute)

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});