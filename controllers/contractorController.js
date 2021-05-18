const db = require("../models");
const passport = require("../config/passport");

module.exports = {

  login: function(req, res) {
    if(!req.body.email){
      res.json({success: false, message: "Email was not provided"})
    } else {
      if(!req.body.password){
        res.json({success: false, message: "Password was not provided"})
      } else {
        passport.authenticate('contractor-local', function (err, contractor, info) { 
           if(err){
             res.json({success: false, message: err})
           } else {
            if (!contractor) {
              res.json({success: false, message: 'Email or Password is incorrect'})
            } else {
              req.login(contractor, function(err){
                if(err){
                  res.json({success: false, message: err})
                } else {
                  res.json(contractor);
                }
              })
            }
           }
        })(req, res);
      }
    }
  },

  logout: function(req, res) {

  },

  signup: function(req, res) {
  
  },

  findAll: function(req, res) {
    db.Contractor
      .find({})
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel)  
        res.json(dbModel);
      })      
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Contractor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Contractor
      .findOne({email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Contractor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Contractor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Contractor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
