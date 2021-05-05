const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  date: {
    type: new Date().setDate(new Date().getDate()),
    unique: false
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
  quote: [
    {
      contractorId: {
        type: Schema.Types.ObjectId,
        ref: "Contractor"
      },
      date: {
        type: new Date().setDate(new Date().getDate()),
        unique: false
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
