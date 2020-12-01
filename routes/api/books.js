const router = require("express").Router();
const booksController = require("../../controller/booksControllers");

// setup route to "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// setup route to "/api/books/:id"
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;