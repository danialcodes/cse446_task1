const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");


//@des      Get movie data
//@routes   GET /getMovie
//@access   Private
const getMovie = asyncHandler(async (req, res) => {
    const movies = await Movie.find();
    res.status(200).json({ message: movies ,error:'false'});
})

//@des      Create movie
//@routes   POST /putMovie
//@access   Private
const createMovie = asyncHandler(async (req, res) => {
    if (!req.body.movie) {
        res.status(400);
        throw new Error("Movie missing");

    }
    const {title,year,director} = req.body.movie;
    const movie = await Movie.create({
        title,
        year,
        director
    });

    res.status(200).json({ ...movie._doc ,error:'false'});
})


//@des      Update movie
//@routes   PUT /:id
//@access   Private
const updateMovie = asyncHandler(async (req, res) => {
    const {title,year,director} = req.body.movie;
    const movie = await Movie.findByIdAndUpdate(req.params.id,{
        title,
        year,
        director
    },{new:true});
    if (!movie) {
        res.status(400);
        throw new Error("Invalid movie id");

    }
    res.status(200).json({ message: movie,error:'false'});
})

//@des      Delete movie
//@routes   DELETE /:id
//@access   Private
const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id,{new:true});
    if (!movie) {
        res.status(400);
        throw new Error("Invalid movie id");
    }
    res.status(200).json({ message: `'${movie.title} by ${movie.director}' deleted successfully`,error:'false'});

})

module.exports = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie

}