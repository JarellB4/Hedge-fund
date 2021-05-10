const mongoose = require("mongoose");

import getUserLocation from "../my-app/src/utils/openCageAPI"

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
  phone: {
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
  location:{
    // GeoJSON Point
    type: {
        type: String,
        enum: ['Point'],
        required: false
    },
    coordinates: {
        type: [Number],
        required: false,
        index: '2dsphere',
        sparse: true,
    },
  },
});

const Contractor = mongoose.model("Contractor", ContractorSchema);

module.exports = Contractor;
