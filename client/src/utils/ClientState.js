import React, { createContext, useReducer, useContext } from "react";
import { CURRENT_CLIENT, CLIENT_JOB_SELECTED } from "./actions";

const initialState = {
  client: {
//     "location": {
//         "coordinates": [
//             -83.613044,
//             42.511118
//         ],
//         "type": "Point"
//     },
//     "jobs": [
//       {
//         "dateCreated": "2021-05-11T14:10:38.941Z",
//         "dateUpdated": "2021-05-11T14:10:38.941Z",
//         "_id": "609a905e4589cb711c54a95d",
//         "client": "609a905e4589cb711c54a950",
//         "category": "Remodel1",
//         "title": "Bathroom remodel",
//         "description": "I have a small 3 piece bathroom that needs remodeling 1",
//         "images": [
//             {
//               "image": "https://hedgefundphotos.s3.us-east-2.amazonaws.com/1.jpg",
//             },
//             {
//                 "image": "https://via.placeholder.com/300"
//             }
//         ],
//         "quotes": [
//             {
//                 "dateCreated": "2021-05-11T14:10:38.941Z",
//                 "dateUpdated": "2021-05-11T14:10:38.941Z",
//                 "contractor": {
//                   "location": {
//                       "coordinates": [
//                           -82.827898,
//                           42.632254
//                       ],
//                       "type": "Point"
//                   },
//                   "_id": "609d49e1eb336596d49589aa",
//                   "email": "roof1@email.com",
//                   "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//                   "companyName": "Schena Roofing & Sheet Metal",
//                   "phone": "586-949-4777",
//                   "streetAddress1": "28299 Kehrig St,",
//                   "StreetAddress2": "",
//                   "city": "Chesterfield",
//                   "state": "MI",
//                   "zip": 48047
//               },
//                 "price": 1000,
//                 "description": "We typically remodel small 3 piece bathrooms for around $1,000. "
//             }
//         ]
//     },
//     {
//       "dateCreated": "2021-05-11T14:10:38.941Z",
//       "dateUpdated": "2021-05-11T14:10:38.941Z",
//       "_id": "609a905e4589cb711c54a955",
//       "client": "609a905e4589cb711c54a950",
//       "category": "Remodel2",
//       "title": "Bathroom remodel2",
//       "description": "I have a small 3 piece bathroom that needs remodeling 2 ",
//       "images": [
//           {
//               "image": "https://via.placeholder.com/300"
//           },
//           {
//               "image": "https://via.placeholder.com/300"
//           }
//       ],
//       "quotes": [
//         {
//           "dateCreated": "2021-05-11T14:10:38.941Z",
//           "dateUpdated": "2021-05-11T14:10:38.941Z",
//           "contractor": {
//             "location": {
//                 "coordinates": [
//                     -82.827898,
//                     42.632254
//                 ],
//                 "type": "Point"
//             },
//             "_id": "609d49e1eb336596d49589ff",
//             "email": "roof2@email.com",
//             "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//             "companyName": "2Schena Roofing & Sheet Metal",
//             "phone": "586-949-4777",
//             "streetAddress1": "28299 Kehrig St,",
//             "StreetAddress2": "",
//             "city": "Chesterfield",
//             "state": "MI",
//             "zip": 48047
//         },
//           "price": 2000,
//           "description": "We typically remodel small 3 piece bathrooms for around $2,000. "
//         },
//         {
//           "dateCreated": "2021-05-11T14:10:38.941Z",
//           "dateUpdated": "2021-05-11T14:10:38.941Z",
//           "contractor": {
//             "location": {
//                 "coordinates": [
//                     -82.827898,
//                     42.632254
//                 ],
//                 "type": "Point"
//             },
//             "_id": "609d49e1eb336596d49589bb",
//             "email": "roof31@email.com",
//             "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//             "companyName": "3Schena Roofing & Sheet Metal",
//             "phone": "586-949-4777",
//             "streetAddress1": "28299 Kehrig St,",
//             "StreetAddress2": "",
//             "city": "Chesterfield",
//             "state": "MI",
//             "zip": 48047
//         },
//           "price": 4000,
//           "description": "We typically remodel small 3 piece bathrooms for around $4,000. "
//         },
//         {
//           "dateCreated": "2021-05-11T14:10:38.941Z",
//           "dateUpdated": "2021-05-11T14:10:38.941Z",
//           "contractor": {
//             "location": {
//                 "coordinates": [
//                     -82.827898,
//                     42.632254
//                 ],
//                 "type": "Point"
//             },
//             "_id": "609d49e1eb336596d49589cc",
//             "email": "roof4@email.com",
//             "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//             "companyName": "4Schena Roofing & Sheet Metal",
//             "phone": "586-949-4777",
//             "streetAddress1": "28299 Kehrig St,",
//             "StreetAddress2": "",
//             "city": "Chesterfield",
//             "state": "MI",
//             "zip": 48047
//         },
//           "price": 5000,
//           "description": "We typically remodel small 3 piece bathrooms for around $5,000. "
//       }
// ]
//   },
//   {
//     "dateCreated": "2021-05-11T14:10:38.941Z",
//     "dateUpdated": "2021-05-11T14:10:38.941Z",
//     "_id": "609a905e4589cb711c54a957",
//     "client": "609a905e4589cb711c54a950",
//     "category": "Remodel3",
//     "title": "Bathroom remodel3",
//     "description": "I have a small 3 piece bathroom that needs remodeling3 ",
//     "images": [
//         {
//             "image": "https://via.placeholder.com/300"
//         },
//         {
//             "image": "https://via.placeholder.com/300"
//         }
//     ],
//     "quotes": [
//         {
//             "dateCreated": "2021-05-11T14:10:38.941Z",
//             "dateUpdated": "2021-05-11T14:10:38.941Z",
//             "contractor": {
//               "location": {
//                   "coordinates": [
//                       -82.827898,
//                       42.632254
//                   ],
//                   "type": "Point"
//               },
//               "_id": "609d49e1eb336596d49589rr",
//               "email": "roof5@email.com",
//               "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//               "companyName": "5Schena Roofing & Sheet Metal",
//               "phone": "586-949-4777",
//               "streetAddress1": "28299 Kehrig St,",
//               "StreetAddress2": "",
//               "city": "Chesterfield",
//               "state": "MI",
//               "zip": 48047
//           },
//             "price": 3000,
//             "description": "We typically remodel small 3 piece bathrooms for around $3,000. "
//         }
//     ]
// }
// ],
//     "_id": "609a905e4589cb711c54a950",
//     "email": "email3@email.com",
//     "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
//     "firstName": "Robert",
//     "lastName": "Plant",
//     "streetAddress1": "56849 Grand River Ave",
//     "StreetAddress2": "",
//     "city": "New Hudson",
//     "state": "MI",
//     "zip": "48165"
},
  selectedJob: {}
}

const ClientContext = createContext(initialState);
const { Provider } = ClientContext;

const reducer = (state, action) => {
  switch (action.type) {
    case CURRENT_CLIENT:
      console.log("action.client", action.client)
      return {
        client: action.client,
      };

      case CLIENT_JOB_SELECTED:
        console.log("action.client", action.job)
        return {
          ...state,
          selectedJob: action.job
        };
          default:
    return state;
  }
};

const ClientProvider = ({ value = [], ...props }) => {
  const [clientState, dispatch] = useReducer(reducer, initialState);
  return <Provider value={[clientState, dispatch]} {...props} />;
};

const useClientContext = () => {

  return useContext(ClientContext);
};

export { ClientProvider, useClientContext };
