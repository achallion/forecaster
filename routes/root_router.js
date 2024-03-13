const express = require('express')
const morgan = require('morgan')
const view_router = require('./view_router')
const public_router = require('./public_router')
const temp_router = require('./temp_router')

const root_router = express.Router();

root_router.use(morgan('tiny'));

root_router.use("/view", view_router)

root_router.use("/public", public_router)

root_router.use("/json-data", temp_router)

root_router.use((req, res) => res.render('../views/404'))

module.exports = root_router;