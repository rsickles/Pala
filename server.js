const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// HTTP request logger
app.use(morgan('tiny'));


// Routes
app.get('', (req, res) => {
		const data = {
			username: 'Ryan',
			age: 5
		};
		res.json(data);
});


app.listen(PORT,console.log(`SERVER IS STARTING at ${PORT}`))