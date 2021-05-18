const router = require("express").Router();
const clientsController = require("../../controllers/clientController");

// Matches with "/api/clients/map"
router.route("/map/:lon/:lat/:radius")
  .get(clientsController.findWithinRadius);


// Matches with "/api/clients"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create);

  // Matches with "/api/clients/login"
  router.route("/login")
  .post(clientsController.login);

  // Matches with "/api/clients/signup"
  router.route("/signup")
  .post(clientsController.signup);

  // Matches with "/api/clients/signup"
  router.route("/logout")
  .post(clientsController.logout);
  
  // Matches with "/api/clients/:id"
  router.route("/:id")
    .get(clientsController.findById)
    .put(clientsController.update)
    .delete(clientsController.remove);


// Matches with "/api/clients/signin/:email"
router.route("/signin/:email")
  .get(clientsController.findByEmail)


module.exports = router;
