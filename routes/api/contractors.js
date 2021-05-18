const router = require("express").Router();
const contractorsController = require("../../controllers/contractorController");

// Matches with "/api/contractors"
router.route("/")
  .get(contractorsController.findAll)
  .post(contractorsController.create);

  // Matches with "/api/contractors/login"
  router.route("/login")
  .post(contractorsController.login);

  // Matches with "/api/contractors/login"
  router.route("/signup")
  .post(contractorsController.signup);

  // Matches with "/api/contractors/logout"
  router.route("/logout")
  .post(contractorsController.logout);
  
// Matches with "/api/contractors/:id"
router.route("/:id")
  .get(contractorsController.findById)
  .put(contractorsController.update)
  .delete(contractorsController.remove);

// Matches with "/api/contractors/signin/:email"
router.route("/signin/:email")
  .get(contractorsController.findByEmail)

module.exports = router;
