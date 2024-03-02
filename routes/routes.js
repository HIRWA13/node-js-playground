const express = require('express')

const mainRouter = express.Router();

const blogRoutes = require('./blogRoutes')


mainRouter.use("/blogs", blogRoutes);


module.exports = mainRouter;