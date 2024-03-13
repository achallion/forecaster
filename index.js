const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

let httpsOptions = {
	key: fs.readFileSync(path.join(__dirname, "privatekey.pem")),
	cert: fs.readFileSync(path.join(__dirname, "request.pem"))
}

const server = express();

const HTTP_PORT = process.env.HTTP_PORT | 3001;
const HTTPS_PORT = process.env.HTTPS_PORT | 4001;

server.use((req, res) => {
	res.send("ger")
});


https.createServer(httpsOptions, server).listen(HTTPS_PORT, () => console.log(`HTTPS Server running on port ${HTTPS_PORT}`));
server.listen(HTTP_PORT, () => console.log(`HTTP Server running on port ${HTTP_PORT}`))
