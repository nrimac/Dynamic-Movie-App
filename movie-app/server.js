const express = require("express");
const app = express();
const session = require("express-session");

const homeRouter = require("./routes/home.routes.js");
const movieRouter = require("./routes/movie.routes.js");

app.use(express.static("public"));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


// app.post("/putanja", (req, res) => {
//   const { kategorija, todotext } = req.body;
//   console.log(`kategorije: ${kategorija}, \ntodotext: ${todotext}`);
//   res.redirect("/putanja");
// });

app.use("/", homeRouter);
app.use('/movies', movieRouter);

app.listen(8080);
