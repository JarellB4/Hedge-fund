const router = require("express").Router();
const contractorsController = require("../../controllers/contractorController");

// Matches with "/api/contractors"
router.route("/")
  .get(contractorsController.findAll)
  .post(contractorsController.create);

// Matches with "/api/contractors/:id"
router.route("/:id")
  .get(contractorsController.findById)
  .put(contractorsController.update)
  .delete(contractorsController.remove);

// Matches with "/api/contractors/signin/:email"
router.route("/signin/:email")
  .get(contractorsController.findByEmail)

module.exports = router;
