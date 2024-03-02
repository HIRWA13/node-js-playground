const express = require('express')

const router = express.Router()

const blogController = require('../controller/blogController')

router.get("/", blogController.blog_index);

// create a new blog
router.post("/", blogController.blog_create_post);


// go to the create blog page

router.get("/create", blogController.blog_create_get);

// get a single blog based on its id

router.get("/:id", blogController.blog_details);

// delete a blog

router.delete("/:id", blogController.blog_delete);

module.exports = router