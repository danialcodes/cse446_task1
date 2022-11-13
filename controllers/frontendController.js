const asyncHandler = require("express-async-handler");

const showFrontend = asyncHandler(async (req, res) => {
    console.log(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.json({message:'success'});
})

module.exports = {
    showFrontend
}
