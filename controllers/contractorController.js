const db = require("../models");

// Defining methods for the booksController
module.exports = {

    contractorName: function () {
        db.Contractor.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json({ contractorName: req.user.CompanyName });
        })
      },


};
