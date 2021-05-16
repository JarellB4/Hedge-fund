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
      coordinates: [-83.650697, 42.450381]
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
      coordinates: [-83.613227, 42.462026]
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
      coordinates: [-83.613044, 42.511118]
    },
    jobs: []
  },
  {
    email: "email4@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "James",
    lastName: "Hetfield",
    streetAddress1: "47115 Gratiot Ave",
    StreetAddress2: "",
    city: "Chesterfield",
    state: "MI",
    zip: "48051",
    location: {
      type: "Point",
      coordinates: [-82.8529659, 42.6456253]
    },
    jobs: []
  },
  {
    email: "email5@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Rob",
    lastName: "Halford",
    streetAddress1: "48700 Gratiot Ave",
    StreetAddress2: "",
    city: "Chesterfield",
    state: "MI",
    zip: "48051",
    location: {
      type: "Point",
      coordinates: [-83.846496, 42.657755]
    },
    jobs: []
  },
  {
    email: "email6@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Eddie",
    lastName: "Van Halen",
    streetAddress1: "30130 23 Mile Rd",
    StreetAddress2: "",
    city: "Chesterfield Township",
    state: "MI",
    zip: "48047",
    location: {
      type: "Point",
      coordinates: [-82.8056831, 42.6744786]
    },
    jobs: []
  },
  {
    email: "email7@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Kid",
    lastName: "Rock",
    streetAddress1: "2145 W Stadium Blvd",
    StreetAddress2: "",
    city: "Ann Arbor",
    state: "MI",
    zip: "48103",
    location: {
      type: "Point",
      coordinates: [-83.7764595, 42.2724444]
    },
    jobs: []
  },
  {
    email: "email8@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Mick",
    lastName: "Jagger",
    streetAddress1: " 1508 N Maple Rd",
    StreetAddress2: "",
    city: "Ann Arbor",
    state: "MI",
    zip: "48103",
    location: {
      type: "Point",
      coordinates: [-83.780746, 42.2949816]
    },
    jobs: []
  },
  {
    email: "email9@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    firstName: "Angus",
    lastName: "Young",
    streetAddress1: " 2259 W Liberty Rd",
    StreetAddress2: "",
    city: "Ann Arbor",
    state: "MI",
    zip: "48103",
    location: {
      type: "Point",
      coordinates: [-83.7957572, 42.2738701]
    },
    jobs: []
  },
];

//------Contractor Seed---------//

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
      coordinates: [-83.694217, 42.48108]
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
      coordinates: [-83.796729, 42.46859]
    }
  },
  {
    email: "roof1@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "Schena Roofing & Sheet Metal",
    phone: "586-949-4777",
    streetAddress1: "28299 Kehrig St,",
    StreetAddress2: "",
    city: "Chesterfield",
    state: "MI",
    zip: "48047",
    location: {
      type: "Point",
      coordinates: [-82.827898, 42.632254]
    }
  },
  {
    email: "bath1@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "KSI Kitchen & Bath",
    phone: "248-323-2054",
    streetAddress1: "6680 Whitmore Lake Rd,",
    StreetAddress2: "",
    city: "Brighton",
    state: "MI",
    zip: "48116",
    location: {
      type: "Point",
      coordinates: [-83.7569244, 42.4969824]
    }
  },
  {
    email: "roof21@email.com",
    password: "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy", //blah
    companyName: "Rapid Roofing",
    phone: "724-292-8896",
    streetAddress1: "41 Enterprise Dr,",
    StreetAddress2: "Unit A",
    city: "Ann Arbor",
    state: "MI",
    zip: "48103",
    location: {
      type: "Point",
      coordinates: [-83.869394, 42.293998]
    }
  },
];

//------Job Seed-------//

function jobSeed(clients, contractors) {
  let dataSeed = [
    {
      dateCreated: Date.now(),
      dateUpdated: Date.now(),
      client: mongoose.Types.ObjectId(clients[0]),
      category: "Landscaping",
      title: "lawn Mowing",
      description: "I have a 1/3 acre lot that needs mowing for the season",
      images:[
        {image: "https://hedgefundphotos.s3.us-east-2.amazonaws.com/free-stock-photo-sites-2-620x414.jpg"},
        {image: "https://hedgefundphotos.s3.us-east-2.amazonaws.com/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"},
        {image: "https://hedgefundphotos.s3.us-east-2.amazonaws.com/stockimage2.png"},
        {image: "https://hedgefundphotos.s3.us-east-2.amazonaws.com/LnRrYf6e.jpg"}
      ],
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
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
      ],
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
    {
      dateCreated: Date.now(),
      dateUpdated: Date.now(),
      client: mongoose.Types.ObjectId(clients[3]),
      category: "House Cleaning",
      title: "House keeper wanted",
      description: "Looking for house keeping services for my estate.",
      images:[],
      quotes: [],
    },
    {
      client: mongoose.Types.ObjectId(clients[4]),
      category: "Lawn Mowing",
      title: "Lawn Mowing",
      description: "Looking for a company to mow my lawn for the season",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"}
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[0]),
          price: 25,
          description: "We would love to service your lawn for $35 a cut",
        }      
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[4]),
      category: "Roofing",
      title: "I New A Roof",
      description: "I have a 2200 sqft ranch with a hip roof. Looking for quotes.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[2]),
          price: 6000,
          description: "Price for this type of home typically runs about $6,000",
        }      
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[5]),
      category: "Roofing",
      title: "New Roof",
      description: "I have a 2700 sqft colonial wihth a gable roof.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"}
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[2]),
          price: 10000,
          description: "should be around $10,000",
        }      
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[6]),
      category: "Roofing",
      title: "New Roof",
      description: "I have a 10,000 sqft homestead I am in need of a roof.",
      images:[
        {image: "https://via.placeholder.com/300"},
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[2]),
          price: 45000,
          description: "Usually about 45,000 but because you are Kid Rock we will do it for $30,000 and concert tickets!",
        },
        {
          contractor: mongoose.Types.ObjectId(contractors[4]),
          price: 40000,
          description: "we can replace your roof for $40,000 and we can start in 3 weeks.",
        }      
      
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[7]),
      category: "Landscaping",
      title: "I need a quote to remove 6 trees",
      description: "I have 6 30' trees in my yard that need removing, please see the pictures for more detail.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"}
      ],
      quotes: [
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[7]),
      category: "Lawn Mowing",
      title: ".5 acre lawn mowing once per week",
      description: "I need my lawn cut once a week until August.  I have 1/2 an acre.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"}
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[0]),
          price: 30,
          description: "$30 a week will cover it.",
        },
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[7]),
      category: "Roofing",
      title: "New Roof",
      description: "I have a 3200 sqft walkout colonial and I am in need of a roof.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[4]),
          price: 15000,
          description: "we can replace your roof for $15,000 and we can start in 3 weeks.",
        }      
      ],
    },
    {
      client: mongoose.Types.ObjectId(clients[8]),
      category: "Remodel",
      title: "Kitchen Remodel",
      description: "300 sqft kitchen remodel.  Please see the pictures for what it looks like now and what I am looking for.",
      images:[
        {image: "https://via.placeholder.com/300"},
        {image: "https://via.placeholder.com/300"},
      ],
      quotes: [
        {
          contractor: mongoose.Types.ObjectId(contractors[3]),
          price: 110000,
          description: "Great kitchen, we can do this for $110,000",
        }      
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
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[2]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[1]) } } }, { new: true })
            .then (updated => {
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[3]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[2]) } } }, { new: true })
            .then (updated => {
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[4]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[3]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[4]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[4]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[5]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[5]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[6]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[6]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[7]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[7]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[7]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[8]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[7]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[9]) } } }, { new: true })
            .then (updated => {
              console.log(updated + " client job id updated");
            })
            .catch(err => {
              console.log(err);
            });
            db.Client.findOneAndUpdate({_id: clientIds[8]}, { $push: { jobs: { _id: mongoose.Types.ObjectId(jobIds[10]) } } }, { new: true })
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