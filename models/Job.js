const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'client'
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  dateUpdated: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: String,
    unique: false
  },
  title: {
    type: String,
    unique: false
  },
  description: {
    type: String,
    unique: false
  },
  image: {
    type: String,
    unique: false
  },
  quotes: [
    {
      contractor: {
        type: Schema.Types.ObjectId,
        ref: "Contractor"
      },
      date: {
        type: Date,
        default: Date.now()
      },
      dateUpdated: {
        type: Date,
        default: Date.now()
      },
      price: {
        type: Number,
        unique: false
      },
      description: {
        type: String,
        unique: false
      }
    }
  ]
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
