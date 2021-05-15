import React, { createContext, useReducer, useContext } from "react";
import { CONTRACTOR_JOBS } from "./actions";

const ContractorJobsContext = createContext();
const { Provider } = ContractorJobsContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CONTRACTOR_JOBS:
      console.log("CONTRACTOR_JOBS ", action.contractorJobs);
      return {
        ...state,
        ContractorJobs: action.contractorJobs,
        loading: false,
      };

    default:
      return state;
  }
};

const ContractorJobsProvider = ({ value = [], ...props }) => {
  const [contractorJobsState, dispatch] = useReducer(reducer, {
    contractorJobs: [
      {
        "dateCreated": "2021-05-14T21:11:42.817Z",
        "dateUpdated": "2021-05-14T21:11:42.817Z",
        "_id": "609ee78e4faeba46749cad57",
        "client": {
          "location": {
            "coordinates": [-83.650697, 42.450381],
            "type": "Point",
          },
          "jobs": ["609ee78e4faeba46749cad57"],
          "_id": "609ee78e4faeba46749cad49",
          "email": "email1@email.com",
          "password":
            "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
          "firstName": "Paul",
          "lastName": "McCartney",
          "streetAddress1": "25760 Pontiac Trail",
          "StreetAddress2": "",
          "city": "South Lyon",
          "state": "MI",
          "zip": "48178",
        },
        "category": "Landscaping",
        "title": "lawn Mowing",
        "description": "I have a 1/3 acre lot that needs mowing for the season",
        "images": [
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
        ],
        "quotes": [
          {
            "dateCreated": "2021-05-14T21:11:42.817Z",
            "dateUpdated": "2021-05-14T21:11:42.817Z",
            "contractor": "609ee78e4faeba46749cad52",
            "price": 25,
            "description": "We would love to service your lawn for $25 a cut",
          },
          {
            "dateCreated": "2021-05-14T21:11:42.817Z",
            "dateUpdated": "2021-05-14T21:11:42.817Z",
            "contractor": "609ee78e4faeba46749cad53",
            "price": 23,
            "description": "We beat any price!",
          },
        ],
      },
      {
        "dateCreated": "2021-05-15T10:40:05.991Z",
        "dateUpdated": "2021-05-15T10:40:05.991Z",
        "_id": "609ee78e4faeba46749cad5a",
        "client": {
          "location": {
            "coordinates": [-83.846496, 42.657755],
            "type": "Point",
          },
          "jobs": ["609ee78e4faeba46749cad5a", "609ee78e4faeba46749cad5b"],
          "_id": "609ee78e4faeba46749cad4d",
          "email": "email5@email.com",
          "password":
            "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
          "firstName": "Rob",
          "lastName": "Halford",
          "streetAddress1": "48700 Gratiot Ave",
          "StreetAddress2": "",
          "city": "Chesterfield",
          "state": "MI",
          "zip": "48051",
        },
        "category": "Lawn Mowing",
        "title": "Lawn Mowing",
        "description": "Looking for a company to mow my lawn for the season",
        "images": [
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
        ],
        "quotes": [
          {
            "dateCreated": "2021-05-15T10:40:05.991Z",
            "dateUpdated": "2021-05-15T10:40:05.991Z",
            "contractor": "609ee78e4faeba46749cad52",
            "price": 25,
            "description": "We would love to service your lawn for $35 a cut",
          },
        ],
      },
      {
        "dateCreated": "2021-05-15T10:40:05.991Z",
        "dateUpdated": "2021-05-15T10:40:05.991Z",
        "_id": "609ee78e4faeba46749cad5f",
        "client": {
          "location": {
            "coordinates": [-83.780746, 42.2949816],
            "type": "Point",
          },
          "jobs": [
            "609ee78e4faeba46749cad5e",
            "609ee78e4faeba46749cad5f",
            "609ee78e4faeba46749cad60",
          ],
          "_id": "609ee78e4faeba46749cad50",
          "email": "email8@email.com",
          "password":
            "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
          "firstName": "Mick",
          "lastName": "Jagger",
          "streetAddress1": " 1508 N Maple Rd",
          "StreetAddress2": "",
          "city": "Ann Arbor",
          "state": "MI",
          "zip": "48103",
        },
        "category": "Lawn Mowing",
        "title": ".5 acre lawn mowing once per week",
        "description":
          "I need my lawn cut once a week until August.  I habve 1/2 an acre.",
        "images": [
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
          {
            "image": "https://via.placeholder.com/300",
          },
        ],
        "quotes": [
          {
            "dateCreated": "2021-05-15T10:40:05.991Z",
            "dateUpdated": "2021-05-15T10:40:05.991Z",
            "contractor": "609ee78e4faeba46749cad52",
            "price": 30,
            "description": "$30 a week will cover it.",
          },
        ],
      },
    ],
  });

  return <Provider value={[contractorJobsState, dispatch]} {...props} />;
};

const useContractorJobsContext = () => {
  return useContext(ContractorJobsContext);
};

export { ContractorJobsProvider, useContractorJobsContext };
