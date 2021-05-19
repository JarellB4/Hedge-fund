import { BorderAll } from "@material-ui/icons";
import React, { createContext, useReducer, useContext } from "react";
import {
  CONTRACTOR_JOBS,
  CONTRACTOR_JOB_SELECTED,
  CONTRACTOR_JOB_QUOTE_UPDATE,
  CONTRACTOR_MAP_CLIENT_SELECTED,
  CONTRACTOR_MAP_JOB_QUOTE_UPDATE,
  CONTRACTOR_MAP_JOB_SELECTED,
} from "./actions";

const initialState = {
  contractorJobs: [
    // {
    //     "dateCreated": "2021-05-14T21:11:42.817Z",
    //     "dateUpdated": "2021-05-14T21:11:42.817Z",
    //     "_id": "609ee78e4faeba46749cad57",
    //     "client": {
    //       "location": {
    //         "coordinates": [-83.650697, 42.450381],
    //         "type": "Point",
    //       },
    //       "jobs": ["609ee78e4faeba46749cad57"],
    //       "_id": "609ee78e4faeba46749cad49",
    //       "email": "email1@email.com",
    //       "password":
    //         "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
    //       "firstName": "Paul",
    //       "lastName": "McCartney",
    //       "streetAddress1": "25760 Pontiac Trail",
    //       "StreetAddress2": "",
    //       "city": "South Lyon",
    //       "state": "MI",
    //       "zip": "48178",
    //     },
    //     "category": "Landscaping",
    //     "title": "lawn Mowing",
    //     "description": "I have a 1/3 acre lot that needs mowing for the season",
    //     "images": [
    //       {
    //         "image": "https://hedgefundphotos.s3.us-east-2.amazonaws.com/1.jpg",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //     ],
    //     "quotes": [
    //       {
    //         "dateCreated": "2021-05-14T21:11:42.817Z",
    //         "dateUpdated": "2021-05-14T21:11:42.817Z",
    //         "contractor": "609ee78e4faeba46749cad52",
    //         "price": 25,
    //         "description": "We would love to service your lawn for $25 a cut",
    //       },
    //       {
    //         "dateCreated": "2021-05-14T21:11:42.817Z",
    //         "dateUpdated": "2021-05-14T21:11:42.817Z",
    //         "contractor": "609ee78e4faeba46749cad53",
    //         "price": 23,
    //         "description": "We beat any price!",
    //       },
    //     ],
    //   },
    //   {
    //     "dateCreated": "2021-05-15T10:40:05.991Z",
    //     "dateUpdated": "2021-05-15T10:40:05.991Z",
    //     "_id": "609ee78e4faeba46749cad5a",
    //     "client": {
    //       "location": {
    //         "coordinates": [-83.846496, 42.657755],
    //         "type": "Point",
    //       },
    //       "jobs": ["609ee78e4faeba46749cad5a", "609ee78e4faeba46749cad5b"],
    //       "_id": "609ee78e4faeba46749cad4d",
    //       "email": "email5@email.com",
    //       "password":
    //         "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
    //       "firstName": "Rob",
    //       "lastName": "Halford",
    //       "streetAddress1": "48700 Gratiot Ave",
    //       "StreetAddress2": "",
    //       "city": "Chesterfield",
    //       "state": "MI",
    //       "zip": "48051",
    //     },
    //     "category": "Lawn Mowing",
    //     "title": "Lawn Mowing",
    //     "description": "Looking for a company to mow my lawn for the season",
    //     "images": [
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //     ],
    //     "quotes": [
    //       {
    //         "dateCreated": "2021-05-15T10:40:05.991Z",
    //         "dateUpdated": "2021-05-15T10:40:05.991Z",
    //         "contractor": "609ee78e4faeba46749cad52",
    //         "price": 25,
    //         "description": "We would love to service your lawn for $35 a cut",
    //       },
    //     ],
    //   },
    //   {
    //     "dateCreated": "2021-05-15T10:40:05.991Z",
    //     "dateUpdated": "2021-05-15T10:40:05.991Z",
    //     "_id": "609ee78e4faeba46749cad5f",
    //     "client": {
    //       "location": {
    //         "coordinates": [-83.780746, 42.2949816],
    //         "type": "Point",
    //       },
    //       "jobs": [
    //         "609ee78e4faeba46749cad5e",
    //         "609ee78e4faeba46749cad5f",
    //         "609ee78e4faeba46749cad60",
    //       ],
    //       "_id": "609ee78e4faeba46749cad50",
    //       "email": "email8@email.com",
    //       "password":
    //         "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
    //       "firstName": "Mick",
    //       "lastName": "Jagger",
    //       "streetAddress1": " 1508 N Maple Rd",
    //       "StreetAddress2": "",
    //       "city": "Ann Arbor",
    //       "state": "MI",
    //       "zip": "48103",
    //     },
    //     "category": "Lawn Mowing",
    //     "title": ".5 acre lawn mowing once per week",
    //     "description":
    //       "I need my lawn cut once a week until August.  I habve 1/2 an acre.",
    //     "images": [
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //       {
    //         "image": "https://via.placeholder.com/300",
    //       },
    //     ],
    //     "quotes": [
    //       {
    //         "dateCreated": "2021-05-15T10:40:05.991Z",
    //         "dateUpdated": "2021-05-15T10:40:05.991Z",
    //         "contractor": "609ee78e4faeba46749cad52",
    //         "price": 30,
    //         "description": "$30 a week will cover it.",
    //       },
    //     ],
    //   },
    //
  ],
  selectedJob: {},
  mapSelectedClient: {},
  mapSelectedJob: {},
};

const ContractorJobsContext = createContext(initialState);
const { Provider } = ContractorJobsContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CONTRACTOR_JOBS:
      console.log("CONTRACTOR_JOBS ", action.contractorJobs);
      return {
        ...state,
        contractorJobs: action.contractorJobs,
        // selectedJob: action.contractorJobs && action.contractorJobs.length > 0 ? action.contractorJobs[0] : {},
      };

    case CONTRACTOR_MAP_CLIENT_SELECTED:
      console.log("CONTRACTOR_CLIENT_SELECTED ", action.client);
      return {
        ...state,
        mapSelectedClient: action.client,
      };

    case CONTRACTOR_JOB_SELECTED:
      console.log("CONTRACTOR_JOB_SELECTED ", action.job);
      return {
        ...state,
        selectedJob: action.job,
      };

    case CONTRACTOR_MAP_JOB_SELECTED:
      console.log("CONTRACTOR_MAP_JOB_SELECTED ", action.job);
      return {
        ...state,
        mapSelectedJob: action.job,
      };

    case CONTRACTOR_JOB_QUOTE_UPDATE:
      console.log("CONTRACTOR_JOB_QUOTE_UPDATE ", action.job);

      // Find the job in the contractorJobs array.
      let jobIndex = state.contractorJobs.findIndex(
        (job) => job._id === action.job._id
      );

      // Make final new array of objects by combining updated object.
      const updatedJobs = [
        ...state.contractorJobs.slice(0, jobIndex),
        action.job,
        ...state.contractorJobs.slice(jobIndex + 1),
      ];

      // Overwrite the original contractorJobs array.
      state.contractorJobs = updatedJobs;

      // Find the job in the map selected client jobs array.
      let clientJobIndex = state.mapSelectedClient.jobs.findIndex(
        (job) => job._id === action.job._id
      );

      // Make final new array of objects by combining updated object.
      const clientUpdatedJobs = [
        ...state.mapSelectedClient.jobs.slice(0, clientJobIndex),
        action.job,
        ...state.mapSelectedClient.jobs.slice(clientJobIndex + 1),
      ];

      // Overwrite the original map selected client jobs array.
      state.mapSelectedClient.jobs = clientUpdatedJobs;

      return {
        ...state,
        selectedJob: action.job,
      };

    case CONTRACTOR_MAP_JOB_QUOTE_UPDATE:
      console.log("CONTRACTOR_MAP_JOB_QUOTE_UPDATE ", action.job);

      // Find the job in the contractorJobs array.
      let mapJobIndex = state.contractorJobs.findIndex(
        (job) => job._id === action.job._id
      );

      // Make final new array of objects by combining updated object.
      const mapUpdatedJobs = [
        ...state.contractorJobs.slice(0, mapJobIndex),
        action.job,
        ...state.contractorJobs.slice(mapJobIndex + 1),
      ];

      // Overwrite the original map selected client jobs array.
      state.contractorJobs = mapUpdatedJobs;


      // Find the job in the map selected client jobs array.
      let mapClientJobIndex = state.mapSelectedClient.jobs.findIndex(
        (job) => job._id === action.job._id
      );

      // Make final new array of objects by combining updated object.
      const mapClientUpdatedJobs = [
        ...state.mapSelectedClient.jobs.slice(0, mapClientJobIndex),
        action.job,
        ...state.mapSelectedClient.jobs.slice(mapClientJobIndex + 1),
      ];

      // Overwrite the original map selected client jobs array.
      state.mapSelectedClient.jobs = mapClientUpdatedJobs;

      return {
        ...state,
        mapSelectedJob: action.job,
      };

    default:
      return state;
  }
};

const ContractorJobsProvider = ({ value = [], ...props }) => {
  const [contractorJobsState, dispatch] = useReducer(reducer, initialState);

  return <Provider value={[contractorJobsState, dispatch]} {...props} />;
};

const useContractorJobsContext = () => {
  return useContext(ContractorJobsContext);
};

export { ContractorJobsProvider, useContractorJobsContext };
