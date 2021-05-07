const db = require("../models");

module.exports = {
  contractorFindAllJobs: function(req, res) {
    db.Job
      .find({})
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel)  
        res.json(dbModel);
      })      
      .catch(err => res.status(422).json(err));
  },
  contractorUpdateJobQuote: function(req, res) {
    db.Job
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  contractorDeleteJobQuote: function(req, res) {
    db.Job
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  contractorCreateJobQuote: function(req, res) {
    db.Job
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  clientFindAllJobs: function(req, res) { //
    db.Job
      .find({ client: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  clientUpdateJob: function(req, res) { //
    const job = req.body;
    job.delete(job.quotes);
    db.Job
      .findOneAndUpdate({ client: req.params.id }, job, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  clientDeleteJob: function(req, res) {
    db.Job
      .findByIdAndDelete({ _id: req.params.jobId })  //get the job id
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  clientCreateJob: function(req, res) {
    const job = req.body;
    job.client = mongoose.Types.ObjectId(req.params.id);
    db.Job
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
