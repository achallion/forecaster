const express = require('express')
const path = require('path')

view_router = express.Router();

view_router.get("/index", (req, res) => {
	res.render("index");
});

view_router.use((req, res) => res.status(404).render('404'))

module.exports = view_router;