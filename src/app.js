// Require dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index.js');
const exphbs = require('express-handlebars');

// Initialize express
const app = express();

// Set Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs.create({
		defaultLayout: 'main',
		extname: '.hbs'
	}).engine
);
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(routes);

// Export app
module.exports = app;
