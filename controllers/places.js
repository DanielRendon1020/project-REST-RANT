const router = require("express").Router();
const places = require("../models/places-array.js");

router.get("/new", (req, res) => {
  res.render("places/new");
});

// Adding place and defaults
router.post("/", (req, res) => {
  if (!req.body.pic) {
    req.body.pic = "/images/NIA.jpg";
  }
  if (!req.body.city) {
    req.body.city = "Whoville";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// Update and defaults
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    if (!req.body.pic) {
      req.body.pic = "/images/NIA.jpg";
    }
    if (!req.body.city) {
      req.body.city = "Whoville";
    }
    if (!req.body.state) {
      req.body.state = "USA";
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

// Edit
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

// Delete
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

// Show
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

router.get("/", (req, res) => {
  res.render("places/index", { places });
});

module.exports = router;
