const router = require('express').Router()
const db = require('../models')
const comment = require('../models/comment')

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

//    Comments
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if(req.body.author === ''){
    req.body.author = undefined
  }
  if(req.body.rant === 'on'){
    req.body.rant = true
  }
  else{
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.get("/new", (req, res) => {
  res.render("places/new");
});



//    Delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//    Edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(foundPlace => {
      res.render('places/edit', { 
        place: foundPlace,
        title: `Editing ${foundPlace.name}`
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(place => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


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
