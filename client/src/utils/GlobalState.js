import React, { createContext, useReducer, useContext } from "react";
import {
  CURRENT_CLIENT
} from "./actions";

const ClientContext = createContext();
const { Provider } = ClientContext;

const reducer = (state, action) => {
  switch (action.type) {
  case CURRENT_CLIENT:
    return {
      ...state,
      client: action.client,
      loading: false
    };

  default:
    return state;
  }
};

const ClientProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer,{
    client: {
      _id: "",
      email: "",
      firstName: "",
      lastName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zip: "",
      location:{
        // GeoJSON Point
        type: "Point",
        coordinates: [],
      },
      jobs: []
    }});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useClientContext = () => {
  return useContext(ClientContext);
};

export { ClientProvider, useClientContext };
