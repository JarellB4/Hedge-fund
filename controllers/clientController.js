const db = require("../models");

module.exports = {
  // findAll: function(req, res) {
  //   db.Client
  //     .find({})
  //     .populate('jobs').exec((err, jobs) => {
  //       console.log(jobs);
  //     })
      
  //     // ({ 
  //     //   path: "jobs",
  //     //   // populate: {path: "quotes.contractor"}
  //     // })
  //     .sort({ date: -1 })
  //     .then(jobs => {
  //       console.log(jobs)  
  //       res.json(jobs);
  //     })      
  //     .catch(err => res.status(422).json(err));
  // },


  findAll: function(req, res) {
    db.Client
      .find({})
      .populate({ 
        path: "jobs",
      })
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel)  
        res.json(dbModel);
      })      
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Client
      .findById(req.params.id)
      .populate({ 
        path: "jobs",
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Client
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Client
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Client
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
