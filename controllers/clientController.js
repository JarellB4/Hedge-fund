const db = require("../models");
const passport = require("../config/passport");


module.exports = {


    // when user logs on we send you back the client name
  clientName: function () {
    db.Client.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({ clientName: req.user.firstName });
    })
  },
    

  findWithinRadius: function(req,res){
    let radius = parseInt(req.params.radius);
    let lon = parseFloat(req.params.lon);
    let lat = parseFloat(req.params.lat);

    db.Client
      .find({location: { $geoWithin: { $centerSphere: [[lon, lat], radius/3963.2] }}})
      .populate({ 
        path: "jobs",
      })
      .then(dbModel => {
        console.log(dbModel)  
        res.json(dbModel);
      })      
      .catch(err => res.status(422).json(err));
  },

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
  findByEmail: function(req, res) { 
    db.Client
      .findOne({email: req.params.email})
      .populate({ 
        path: "jobs",
        populate: {path: "quotes.contractor"}
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
    const client = req.body;
    client.delete(client.jobs);
    db.Client
      .findOneAndUpdate({ _id: req.params.id }, client, {new: true})
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
