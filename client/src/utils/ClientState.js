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
  const [clientState, dispatch] = useReducer(reducer,{
    client: {
    "location": {
        "coordinates": [
            -83.613044,
            42.511118
        ],
        "type": "Point"
    },
    "jobs": [
      {
        "dateCreated": "2021-05-11T14:10:38.941Z",
        "dateUpdated": "2021-05-11T14:10:38.941Z",
        "_id": "609a905e4589cb711c54a95d",
        "client": "609a905e4589cb711c54a950",
        "category": "Remodel1",
        "title": "Bathroom remodel",
        "description": "I have a small 3 piece bathroom that needs remodeling 1",
        "images": [
            {
                "image": "https://via.placeholder.com/300"
            },
            {
                "image": "https://via.placeholder.com/300"
            }
        ],
        "quotes": [
            {
                "dateCreated": "2021-05-11T14:10:38.941Z",
                "dateUpdated": "2021-05-11T14:10:38.941Z",
                "contractor": "609a905e4589cb711c54a959",
                "price": 1000,
                "description": "We typically remodel small 3 piece bathrooms for around $7,000. "
            }
        ]
    },
    {
      "dateCreated": "2021-05-11T14:10:38.941Z",
      "dateUpdated": "2021-05-11T14:10:38.941Z",
      "_id": "609a905e4589cb711c54a955",
      "client": "609a905e4589cb711c54a950",
      "category": "Remodel2",
      "title": "Bathroom remodel2",
      "description": "I have a small 3 piece bathroom that needs remodeling 2 ",
      "images": [
          {
              "image": "https://via.placeholder.com/300"
          },
          {
              "image": "https://via.placeholder.com/300"
          }
      ],
      "quotes": [
          {
              "dateCreated": "2021-05-11T14:10:38.941Z",
              "dateUpdated": "2021-05-11T14:10:38.941Z",
              "contractor": "609a905e4589cb711c54a959",
              "price": 2000,
              "description": "We typically remodel small 3 piece bathrooms for around $7,000. "
          }
      ]
  },
  {
    "dateCreated": "2021-05-11T14:10:38.941Z",
    "dateUpdated": "2021-05-11T14:10:38.941Z",
    "_id": "609a905e4589cb711c54a957",
    "client": "609a905e4589cb711c54a950",
    "category": "Remodel3",
    "title": "Bathroom remodel3",
    "description": "I have a small 3 piece bathroom that needs remodeling3 ",
    "images": [
        {
            "image": "https://via.placeholder.com/300"
        },
        {
            "image": "https://via.placeholder.com/300"
        }
    ],
    "quotes": [
        {
            "dateCreated": "2021-05-11T14:10:38.941Z",
            "dateUpdated": "2021-05-11T14:10:38.941Z",
            "contractor": "609a905e4589cb711c54a959",
            "price": 3000,
            "description": "We typically remodel small 3 piece bathrooms for around $7,000. "
        }
    ]
}
],
    "_id": "609a905e4589cb711c54a950",
    "email": "email3@email.com",
    "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
    "firstName": "Robert",
    "lastName": "Plant",
    "streetAddress1": "56849 Grand River Ave",
    "StreetAddress2": "",
    "city": "New Hudson",
    "state": "MI",
    "zip": "48165"
}});

  return <Provider value={[clientState, dispatch]} {...props} />;
};

const useClientContext = () => {
  return useContext(ClientContext);
};

export { ClientProvider, useClientContext };
