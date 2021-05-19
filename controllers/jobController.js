const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  contractorFindAllJobQuotes: function(req, res) {
    db.Job
      .find({ "quotes.contractor": req.params.id })
      .populate({ 
        path: "client",
      })
      .then(dbModel => {
        console.log(dbModel)  
        res.json(dbModel);
      })      
      .catch(err => res.status(422).json(err));
  },
  contractorUpdateJobQuote: function(req, res) {
    let quote = req.body;
    quote.dateUpdated = Date.now();
    db.Job
      .findOneAndUpdate({_id: req.params.jobId, "quotes.contractor": req.params.id }, { $set: { "quotes.$": quote }} , {new: true})
      .populate('client')
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)})
        .catch(err => res.status(422).json(err));
  },
  contractorDeleteJobQuote: function(req, res) {
    db.Job
      .findOneAndUpdate({ _id: req.params.jobId }, { $pull: { "quotes": {"contractor": req.params.id} }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  contractorCreateJobQuote: function(req, res) {
    const quote = req.body;
    quote.dateUpdated = Date.now();
    quote.dateCreated = Date.now();
    quote.contractor = mongoose.Types.ObjectId(req.params.id);
    db.Job
    .findOneAndUpdate({ _id: req.params.jobId }, { $push: { "quotes": quote }} , {new: true})
    .populate('client')
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
    delete job.quotes;
    job.dateUpdated = Date.now();
    db.Job
      .findOneAndUpdate({ _id: job._id }, { $set: job }, {new: true})
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
      .create(job)
      .then(dbJobModel => {
        db.Client.findOneAndUpdate({ _id: req.params.id }, { $push: { "jobs": mongoose.Types.ObjectId(dbJobModel._id) }} , {new: true} )
        .then(dbModel => res.json(dbJobModel))
        .catch(err => res.status(422).json(err));
        })
      .catch(err => res.status(422).json(err));
  }
};
