const router = require('express').Router();

// home
// GET /
router.get('/', (req, res, next) => {

  res.render('index', {site: "Home"});
  next();
});

// signup
// GET /signup
router.get('/signup', (req, res, next) => {
  res.render('signup', {site: "Register"});
  next();
});

// signup
// POST /signup
router.post('/signup', (req, res, next) => {
  res.send('<h1>Sign Up Complete!');
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
  res.render('about', {site: "About"});
  next();
});

// contact
// GET /contact
router.get('/contact', (req, res, next) => {
  res.render('contact', {site: "Contact"});
  next();
});

// profile
// GET /profile


//export the router
module.exports = router;