const router = require("express").Router();
const jobsController = require("../../controllers/jobController");

// Matches with "/api/jobs"
// router.route("/")
//   .get(jobsController.findAll)

// Matches with "/api/jobs/client/:id" 
 //pass in client id
router.route("/client/:id")
  .get(jobsController.clientFindAllJobs)
  .put(jobsController.clientUpdateJob)
  .post(jobsController.clientCreateJob);

  router.route("/client/:id/:jobId")
  .delete(jobsController.clientDeleteJob)

// Matches with "/api/jobs/contractor/:id"
//pass in contractor id
router.route("/contractor/:id")
  .get(jobsController.contractorFindAllJobs);  //return all jobs with quotes that belong to the contractor
  
router.route("/contractor/:id/:jobId")
  .put(jobsController.contractorUpdateJobQuote)  //update a quote
  .post(jobsController.contractorCreateJobQuote); //create a quote for a job

router.route("/contractor/:id/:QuoteId")
  .delete(jobsController.contractorDeleteJobQuote)  //delete a quote on a job

  module.exports = router;
