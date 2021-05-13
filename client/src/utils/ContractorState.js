import React, { createContext, useReducer, useContext } from "react";
import {
  CURRENT_CONTRACTOR
} from "./actions";

const ContractorContext = createContext();
const { Provider } = ContractorContext;

const reducer = (state, action) => {
  switch (action.type) {
  case CURRENT_CONTRACTOR:
    return {
      ...state,
      Contractor: action.contractor,
      loading: false
    };

  default:
    return state;
  }
};

const ContractorProvider = ({ value = [], ...props }) => {
  const [contractorState, dispatch] = useReducer(reducer,{
    contractor: {}});

  return <Provider value={[contractorState, dispatch]} {...props} />;
};

const useContractorContext = () => {
  return useContext(ContractorContext);
};

export { ContractorProvider, useContractorContext };
