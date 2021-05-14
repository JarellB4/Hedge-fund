import React, { createContext, useReducer, useContext } from "react";
import { CURRENT_CONTRACTOR } from "./actions";

const ContractorContext = createContext();
const { Provider } = ContractorContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CURRENT_CONTRACTOR:
      console.log("CONTRACTOR ",  action.contractor )
      return {
        ...state,
        Contractor: action.contractor,
        loading: false,
      };

    default:
      return state;
  }
};

const ContractorProvider = ({ value = [], ...props }) => {
  const [contractorState, dispatch] = useReducer(reducer, {
    contractor: {
      'location': {
        'coordinates': [-83.694217, 42.48108],
        'type': "Point",
      },
      '_id': "609d49e1eb336596d49589a8",
      'email': "lawn1@email.com",
      'password': "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
      'companyName': "South Lyon Lawn Care",
      'phone': "248-323-2054",
      'streetAddress1': "12737 12 Mile Rd",
      'StreetAddress2': "",
      'city': "South Lyon",
      'state': "MI",
      'zip': 48178
    }});

  return <Provider value={[contractorState, dispatch]} {...props} />;
};

const useContractorContext = () => {
  return useContext(ContractorContext);
};

export { ContractorProvider, useContractorContext };
