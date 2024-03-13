const express = require('express')
const path = require('path')

view_router = express.Router();

view_router.get("/index.html", (req, res) => {
	res.render("index");
});

module.exports = view_router;