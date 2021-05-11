const router = require("express").Router();
const clientsController = require("../../controllers/clientController");

// Matches with "/api/clients/map"
router.route("/map/:lon/:lat/:radius")
  .get(clientsController.findWithinRadius);


// Matches with "/api/clients"
router.route("/")
  .get(clientsController.findAll)
  .post(clientsController.create);

// Matches with "/api/clients/:id"
router.route("/:id")
  .get(clientsController.findById)
  .put(clientsController.update)
  .delete(clientsController.remove);

module.exports = router;
