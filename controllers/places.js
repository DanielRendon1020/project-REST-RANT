const router = require("express").Router();
const places = require('../models/places-array.js')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post("/", (req, res) => {
  if(!req.body.pic) {
    req.body.pic = '/images/NIA.jpg'}
  if(!req.body.city) {
    req.body.city = 'Whoville'
  }
  if(!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

module.exports = router;
