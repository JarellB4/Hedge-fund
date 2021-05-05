const router = require("express").Router();
const jobsController = require("../../controllers/jobController");

// Matches with "/api/jobs"
router.route("/")
//   .get(jobsController.findAll)
//   .post(jobsController.create);

// // Matches with "/api/jobs/:id"
// router.route("/:id")
//   .get(jobsController.findById)
//   .put(jobsController.update)
//   .delete(jobsController.remove)
//   .post(jobsController.createQuote);

module.exports = router;
