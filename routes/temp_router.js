const express = require('express')
const axios = require('axios')

const temp_router = express.Router();

temp_router.get("/:zipcode",async (req, res, next) => {
	let zipcode = req.params.zipcode;
	let resp1 = await axios.get(`https://api.weatherbit.io/v2.0/current?key=3f725597d9184873b91969e4cca986ea&postal_code=${zipcode}`);
	let temperature = resp1.data.data[0].temp
	if(temperature === undefined)
	{
		next();
		return;
	}

	res.json({
		zipcode: zipcode,
		temperature: temperature
	});
});

temp_router.use((req, res) => {
	res.render('404');	
});

module.exports = temp_router;