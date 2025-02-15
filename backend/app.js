const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const connectDB = require("./connectDB");

// Import routers

const usersRouter = require('./routes/users');

const messageRouter = require('./routes/message');

// Initialize dotenv for environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create Express app
const app = express();

// Set view engine (consider switching to Pug if using Jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // Jade is now Pug

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route handlers

app.use('/users', usersRouter);
app.use('/message',messageRouter)
// Catch 404 errors
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error page
  res.render('error');
});

// Set the port
const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
