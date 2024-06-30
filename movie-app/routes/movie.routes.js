const express = require("express");
const router = express.Router();
const session = require("express-session");

router.get("/", (req, res) => {
  if (!req.session.movies) {
    req.session.movies = [];
  }
  res.render("movieList", { movies: req.session.movies });
});

router.get("/add", (req, res) => {
  res.render("addMovie");
});

router.post("/add", (req, res) => {
  const { title, director } = req.body;
  if (!req.session.movies) {
    req.session.movies = [];
  }
  const index = req.session.movies.length;

  console.log(`title: ${title}, director: ${director}, index: ${index}`);
  req.session.movies.push({ title, director, index });
  res.redirect("/movies");
});

router.get("/delete/:index", (req, res) => {
  const index = req.params.index;
  req.session.movies.splice(index, 1);
  res.redirect("/movies");
});

module.exports = router;
