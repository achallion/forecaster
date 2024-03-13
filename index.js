const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const root_router = require('./routes/root_router')

let httpsOptions = {
	key: fs.readFileSync(path.join(__dirname, "privatekey.pem")),
	cert: fs.readFileSync(path.join(__dirname, "request.pem"))
}

const HTTP_PORT = process.env.HTTP_PORT | 3001;
const HTTPS_PORT = process.env.HTTPS_PORT | 4001;

const server = express();

server.set('views',path.join(__dirname, 'views'));
server.set('view engine',"ejs")

// server.use("/public",express.static(path.join(__dirname, "public")))


server.use("/", root_router);

https.createServer(httpsOptions, server).listen(HTTPS_PORT, () => console.log(`HTTPS Server running on port ${HTTPS_PORT}`));
server.listen(HTTP_PORT, () => console.log(`HTTP Server running on port ${HTTP_PORT}`))
