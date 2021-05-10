const mongoose = require("mongoose");
const Schema = mongoose.Schema;

import getUserLocation from "../my-app/src/utils/openCageAPI";

const ClientSchema = new Schema({
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
    type: String,
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
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: false
    }
  ]
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;
