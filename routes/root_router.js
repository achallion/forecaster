const express = require('express')
const morgan = require('morgan')
const view_router = require('./view_router')
const public_router = require('./public_router')

const root_router = express.Router();

root_router.use(morgan('tiny'));

root_router.use("/view", view_router)

root_router.use("/public", public_router)

module.exports = root_router;