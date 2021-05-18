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
        passport.authenticate('client-local', function (err, client, info) { 
           if(err){
             res.json({success: false, message: err})
           } else {
            if (!client) {
              res.json({success: false, message: 'Email or Password is incorrect'})
            } else {
              req.login(client, function(err){
                if(err){
                  res.json({success: false, message: err})
                } else {
                  // const token =  jwt.sign({
                  //   userId : user._id, 
                  //   username:user.username}, 
                  //   secretkey, 
                  //   {expiresIn: '24h'}
                  // );
                  // res.json({success:true, message:"Authentication was successful", token: token });
                  res.json(client);
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
