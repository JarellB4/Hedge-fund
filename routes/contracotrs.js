const router = require("express").Router();
const contractorsController = require("../../controllers/contractorController");

// Matches with "/api/contractors"
router.route("/")
  .get(contractorsController.findAll)
  .post(contractorsController.create);

// Matches with "/api/contractors/:id"
router
  .route("/:id")
  .get(contractorsController.findById)
  .put(contractorsController.update)
  .delete(contractorsController.remove);

module.exports = router;
