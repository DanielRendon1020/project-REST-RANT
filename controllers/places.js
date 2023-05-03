const router = require('express').Router()
const db = require('../models')

//    Index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


//    Create
router.post("/", (req, res) => {
  if(req.body.pic === '') {
    req.body.pic = undefined
  }
  if(req.body.city === '') {
    req.body.city = undefined
  }
  if(req.body.state === '') {
    req.body.state = undefined
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if(err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for(let field in err.errors) {
          message += `${field} was ${err.errors[field].value}`
          message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('places/new', {message})}
      else{
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

//    Show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(foundPlace => {
    console.log(foundPlace.comments)
      res.render('places/show', { 
        place: foundPlace,
        title: foundPlace.name})
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = router;
