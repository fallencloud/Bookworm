//dependencies
const express = require('express');
//import router
const routes = require('./routes');

const app = express();

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

//use router
app.use('/', routes);
const port = process.env.port || 3000;

//middleware

//basic error handling
app.use((req, res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    site: "Error",
    error: {}
  });

});

//boiler plate code
app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.info(`Now listening on port ${port}`);
  }
});
