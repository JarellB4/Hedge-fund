import React, { createContext, useReducer, useContext } from "react";
import { CONTRACTOR_JOBS } from "./actions";

const ContractorJobsContext = createContext();
const { Provider } = ContractorJobsContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CONTRACTOR_JOBS:
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
    contractorJobs: 
  [
    {
        "dateCreated": "2021-05-13T15:46:41.317Z",
        "dateUpdated": "2021-05-13T15:46:41.317Z",
        "_id": "609d49e1eb336596d49589ad",
        "client": "609d49e1eb336596d495899f",
        "category": "Landscaping",
        "title": "lawn Mowing",
        "description": "I have a 1/3 acre lot that needs mowing for the season",
        "images": [
            {
                "image": "https://via.placeholder.com/300"
            }
        ],
        "quotes": [
            {
                "dateCreated": "2021-05-13T15:46:41.317Z",
                "dateUpdated": "2021-05-13T15:46:41.317Z",
                "contractor": "609d49e1eb336596d49589a8",
                "price": 25,
                "description": "We would love to service your lawn for $25 a cut"
            },
            {
                "dateCreated": "2021-05-13T15:46:41.317Z",
                "dateUpdated": "2021-05-13T15:46:41.317Z",
                "contractor": "609d49e1eb336596d49589a9",
                "price": 23,
                "description": "We beat any price!"
            }
        ]
    },
    {
        "dateCreated": "2021-05-14T15:00:22.991Z",
        "dateUpdated": "2021-05-14T15:00:22.991Z",
        "_id": "609d49e1eb336596d49589b0",
        "client": "609d49e1eb336596d49589a3",
        "category": "Lawn Mowing",
        "title": "Lawn Mowing",
        "description": "Looking for a company to mow my lawn for the season",
        "images": [
            {
                "image": "https://via.placeholder.com/300"
            }
        ],
        "quotes": [
            {
                "dateCreated": "2021-05-14T15:00:22.991Z",
                "dateUpdated": "2021-05-14T15:00:22.991Z",
                "contractor": "609d49e1eb336596d49589a8",
                "price": 25,
                "description": "We would love to service your lawn for $35 a cut"
            }
        ]
    },
    {
        "dateCreated": "2021-05-14T15:00:22.991Z",
        "dateUpdated": "2021-05-14T15:00:22.991Z",
        "_id": "609d49e1eb336596d49589b5",
        "client": "609d49e1eb336596d49589a6",
        "category": "Lawn Mowing",
        "title": ".5 acre lawn mowing once per week",
        "description": "I need my lawn cut once a week until August.  I habve 1/2 an acre.",
        "images": [
            {
                "image": "https://via.placeholder.com/300"
            }
        ],
        "quotes": [
            {
                "dateCreated": "2021-05-14T15:00:22.991Z",
                "dateUpdated": "2021-05-14T15:00:22.991Z",
                "contractor": "609d49e1eb336596d49589a8",
                "price": 30,
                "description": "$30 a week will cover it."
            }
        ]
    }
]   
});

  return <Provider value={[contractorJobsState, dispatch]} {...props} />;
};

const useContractorJobsContext = () => {
  return useContext(ContractorJobsContext);
};

export { ContractorJobsProvider, useContractorJobsContext };
