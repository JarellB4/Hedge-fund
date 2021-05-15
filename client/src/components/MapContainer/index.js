import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API from "../../utils/API"

const MapContainer = (props) => {
  
  const [mapStateData, setMapStateData] = useState([]);

  const longitude = props.contractor.location.coordinates[0];
  const latitude = props.contractor.location.coordinates[1];
  let radius = 20;

  useEffect(() => {
    async function getClientJobsInRadius() {
      API.getJobsInRadius(longitude, latitude, radius)
      .then(res => {
        
        const data = {
          mapStyles : {
            height: "100vh",
            width: "100%"
                },
          defaultCenter : {
            lat: latitude, lng: longitude
          },
          clients : res.data
        };
        
        setMapStateData(data);
      })
      .catch(err => console.log(err));
    };

    getClientJobsInRadius();
      
  }, [longitude, latitude, radius]);
  
  function renderMarkers() {
    
    console.log("Clients Map Data:", mapStateData.clients);

    if(mapStateData && mapStateData.clients) {
      mapStateData.clients.map(client => {
        return (
        <Marker key={client.email} position={client.location.coordinates}/>
        )
      })
    }
    else {
      return null;
    }
  }

  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDH6tFUYbWJcIgzAcqC6qW_Spr3IIfR7mY'>
        <GoogleMap
          mapContainerStyle={mapStateData.mapStyles}
          zoom={13}
          center={mapStateData.defaultCenter}
        >
          {/* { console.log("Clients Map Data:", mapStateData.clients)} */}
          {renderMarkers}
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;