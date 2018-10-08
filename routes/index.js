const router = require('express').Router();

// home
// GET /
router.get('/', (req, res, next) => {

  res.render('index');
  next();
});

// signup
// GET /signup
router.get('/signup', (req, res, next) => {
  res.send("<h1>Signup form</h1>");
  next();
});

//login
// GET /login
router.get('/login', (req, res, next) => {
  res.send("<h1>Login Page</h1>");
});

// about
// GET /about
router.get('/about', (req, res, next) => {
  res.render('about');
  next();
});

// contact
// GET /contact
router.get('/contact', (req, res, next) => {
  res.send("<h1>Contact Page</h1>");
  next();
});

// profile
// GET /profile
router.get('/profile', (req, res, next) => {
  res.send("<h1>Profile Page</h1>");
});

//export the router
module.exports = router;