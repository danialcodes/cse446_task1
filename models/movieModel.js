const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: { type: String, required: [true, "Please add movie title"] },
    year: { type: Number, required: [true, "Please add movie year"] },
    director: { type: String, required: [true, "Please add movie director name"] },

}, {
    timestamps: true,
});

module.exports = mongoose.model("Movie",movieSchema);