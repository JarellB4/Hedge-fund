const db = require("../models");

module.exports = {
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
