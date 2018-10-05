//dependencies
const express = require('express');
//import router
const routes = require('./routes');

const app = express();
//use router
app.use('/', routes);
const port = process.env.port || 3000;

//middleware

//boiler plate code
app.listen(port, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.info(`Now listening on port ${port}`);
  }
})
