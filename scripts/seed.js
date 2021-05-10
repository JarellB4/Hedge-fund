let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost:27017/hedgefund", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let clientSeed = [
  {
    email: "email1@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Paul",
    lastName: "McCartney",
    streetAddress1: "25760 Pontiac Trail",
    StreetAddress2: "",
    city: "South Lyon",
    state: "MI",
    zip: "48178",
    location: {
      type: "Point",
      coordinates: [-83.6552936, 42.478327]
    },
    jobs: []
  },
  {
    email: "email2@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Freddie",
    lastName: "Mercury",
    streetAddress1: "57088 10 Mile Rd",
    StreetAddress2: "",
    city: "South Lyon",
    state: "MI",
    zip: "48178",
    location: {
      type: "Point",
      coordinates: [-83.6276528, 42.472219]
    },
    jobs: []
  },
  {
    email: "email3@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Robert",
    lastName: "Plant",
    streetAddress1: "56849 Grand River Ave",
    StreetAddress2: "",
    city: "New Hudson",
    state: "MI",
    zip: "48165",
    location: {
      type: "Point",
      coordinates: [-83.636473, 42.4938968]
    },
    jobs: []
  },
];

let contractorSeed = [
  {
    email: "lawn1@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "South Lyon Lawn Care",
    phone: "248-323-2054",
    streetAddress1: "12737 12 Mile Rd",
    StreetAddress2: "",
    city: "South Lyon",
    state: "MI",
    zip: "48178",
    location: {
      type: "Point",
      coordinates: [-83.7813526, 42.4817418]
    }
  },
  {
    email: "lawn2@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "Mow Daddy",
    phone: "248-323-2054",
    streetAddress1: "9200 River Valley Rd",
    StreetAddress2: "",
    city: "Brighton",
    state: "MI",
    zip: "48116",
    location: {
      type: "Point",
      coordinates: [-83.7813526, 42.4817441]
    }
  },
  {
    email: "bath1@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "KSI Kitchen & Bath",
    phone: "248-323-2054",
    streetAddress1: "9325 Maltby Rd",
    StreetAddress2: "",
    city: "Brighton",
    state: "MI",
    zip: "48116",
    location: {
      type: "Point",
      coordinates: [-83.7569244, 42.4969824]
    }
  },
];

function jobSeed(clients, contractors) {
  let dataSeed = [
    {
      dateCreated: Date.now(),
      dateUpdated: Date.now(),
      client: mongoose.Types.ObjectId(clients[0]),
      category: "Landscaping",
      title: "lawn Mowing",
      description: "I have a 1/3 acre lot that needs mowing for the season",
      image: "https://via.placeholder.com/300",
      quotes: [
        {
          dateCreated: Date.now(),
          dateUpdated: Date.now(), 
          contractor: mongoose.Types.ObjectId(contractors[0]),
          price: 25,
          description: "We would love to service your lawn for $25 a cut",
        },
        {
          dateCreated: Date.now(),
          dateUpdated: Date.now(),
          contractor: mongoose.Types.ObjectId(contractors[1]),
          price: 23,
          description: "We beat any price!",
        },
      ],
    },
    {
      dateCreated: Date.now(),
      dateUpdated: Date.now(),
      client: mongoose.Types.ObjectId(clients[2]),
      category: "Remodel",
      title: "Bathroom remodel",
      description: "I have a small 3 piece bathroom that needs remodeling ",
      image: "https://via.placeholder.com/300",
      quotes: [
        { 
          dateCreated: Date.now(),
          dateUpdated: Date.now(),
          contractor: mongoose.Types.ObjectId(contractors[2]),
          price: 7000,
          description:
            "We typically remodel small 3 piece bathrooms for around $7,000. ",
        },
      ],
    },
  ];

  return dataSeed;
}

let clientIds = [];
let contractorIds = [];
let jobIds = [];

db.Client.deleteMany({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then((clientData) => {
    console.log(clientData.result.n + " client records inserted!");
    clientIds = clientData.insertedIds;
    db.Contractor.deleteMany({})
      .then(() => db.Contractor.collection.insertMany(contractorSeed))
      .then((contractorData) => {
        console.log(contractorData.result.n + " contractor records inserted!");
        contractorIds = contractorData.insertedIds;
        db.Job.deleteMany({})
          .then(() => db.Job.collection.insertMany(jobSeed(clientIds, contractorIds)))
          .then((data) => {
            jobIds = data.insertedIds;
            console.log(data.result.n + " job records inserted!", jobIds);

            db.Client.findOneAndUpdate({_id: clientIds[0]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[0]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });

            db.Client.findOneAndUpdate({_id: clientIds[2]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[1]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
              process.exit(0);
            })
            .catch(err => {
              console.log(err);
            });
          })
          .catch((err) => {
            console.error(err);
            process.exit(1);
          });
            
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
