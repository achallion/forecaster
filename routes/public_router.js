const express = require('express');3
const path = require('path')

const public_router = express.Router();

public_router.use(express.static(path.join(__dirname, "../public")))

module.exports = public_router;