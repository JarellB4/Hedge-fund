const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const ClientSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: false
  },
  firstName: {
    type: String,
    unique: false
  },
  lastName: {
    type: String,
    unique: false
  },
  streetAddress1: {
    type: String,
    unique: false
  },
  streetAddress2: {
    type: String,
    unique: false
  },
  city: {
    type: String,
    unique: false
  },
  state: {
    type: String,
    unique: false
  },
  zip: {
    type: Number,
    unique: false,
  },
  location: {
    type: "Point",
    coordinates: [],
  },  
  job: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job"
    }
  ]
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
