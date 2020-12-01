const router = require("express").Router();
const bookRoutes = require("./books");

// setup book routes
router.use("/books", bookRoutes);

module.exports = router;

