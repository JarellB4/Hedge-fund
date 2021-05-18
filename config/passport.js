const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use('client-local',
  new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      // Match user
      db.Client.findOne({
          email: email
      })
      .populate({ 
        path: "jobs",
        populate: {path: "quotes.contractor"}
      })
      .then(client => {
          if (!client) {
              return done(null, false, { message: 'The email not registered' });
          }

          // Match password
          bcrypt.compare(password, client.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                  return done(null, client);
              } else {
                  return done(null, false, { message: 'Password incorrect' });
              }
          });
      })
      .catch(err => console.log(err));
  })
);

passport.use('contractor-local',
  new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      // Match user
      db.Contractor.findOne({
        email: email
      }).then(contractor => {
          if (!contractor) {
              return done(null, false, { message: 'The email not registered' });
          }

          // Match password
          bcrypt.compare(password, contractor.password, (err, isMatch) => {
              if (err) throw err;
              if (isMatch) {
                  return done(null, contractor);
              } else {
                  return done(null, false, { message: 'Password incorrect' });
              }
          });
      })
      .catch(err => console.log(err));
  })
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
