const express = require("express");
const router = express.Router();

const {getMovie,createMovie,updateMovie,deleteMovie
    } = require("../controllers/movieController");



router.route("/getMovie").get(getMovie);
router.route("/putMovie").post(createMovie);
router.route("/:id").put(updateMovie).delete(deleteMovie);


module.exports = router
