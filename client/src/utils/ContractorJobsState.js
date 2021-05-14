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
    contractorJobs: {

    }});

  return <Provider value={[contractorJobsState, dispatch]} {...props} />;
};

const useContractorJobsContext = () => {
  return useContext(ContractorJobsContext);
};

export { ContractorJobsProvider, useContractorJobsContext };
