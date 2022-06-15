const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const movieList = require("./movies.json");
const port = 3000;

//express template engine
//handlebars
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//setting static files
app.use(express.static("public"));

//routes setting
app.get("/", (req, res) => {
  res.render("index", { movies: movieList.results });
});


//params
app.get("/movies/:movie_id", (req, res) => {
    const movie = movieList.results.filter(movie=> movie.id == req.params.movie_id)
  res.render('show', { movie: movie[0] })
});

//querystring
app.get('/search',(req,res)=>{
  const movies = movieList.results.filter((movie)=>{
    return movie.title.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render("index", { movies: movies,keyword: req.query.keyword });
})
//listen express server
app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}`);
});
