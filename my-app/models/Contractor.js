const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContractorSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: false
  },
  CompanyName: {
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
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }});

const Contractor = mongoose.model("Contractor", ContractorSchema);

module.exports = Contractor;
