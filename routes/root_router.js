const express = require('express')
const morgan = require('morgan')
const view_router = require('./view_router')

const root_router = express.Router();

root_router.use(morgan('tiny'));

// root_router.use("/view", view_router)

module.exports = root_router;