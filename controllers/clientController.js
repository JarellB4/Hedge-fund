const db = require("../models");
const newClient = {
  email: "email4@email.com",
  password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
  firstName: "Ozzy",
  astName: "Ozborne",
  streetAddress1: "27440 Pond Dr",
  StreetAddress2: "",
  city: "New Hudson",
  state: "MI",
  zip: "48165",
//   "location": [
//     42.4893176,
//     -83.6252464
// ],
location: {
  type: "Point",
  coordinates: ["42.4893176", "83.6252464"]
},
jobs: []
};

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
  // create: function(req, res) {
  //   db.Client
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  create: function(req, res) {
    db.Client
      .create(newClient)
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
