const db = require("../models");
const mongoose = require("mongoose");
const aws = require("aws-sdk");
const uuid = require('uuid');
const aws_access_key_id = process.env.aws_access_key_id;
const aws_secret_access_key = process.env.aws_secret_access_key;
const S3_BUCKET = "hedgefundphotos"
aws.config.region = "us-east-2"

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
  },
  fileSignedRequest: function(req, res) {
    const fileName = req.query.fileName;
    const fileType = req.query.fileType;
    const s3 = new aws.S3();
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.write(JSON.stringify(returnData));
      res.end();
    });
  }
};
