import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API from "../../utils/API";
import { useContractorJobsContext } from "../../utils/ContractorJobsState";
import { CONTRACTOR_MAP_CLIENT_SELECTED } from "../../utils/actions";

const MapContainer = (props) => {
  const [currentRadius, setRadius] = useState(20);
  const [selected, setSelected] = useState({});
  const [mapStateData, setMapStateData] = useState([]);
  const [contractorJobsState, contractorJobsDispatch] = useContractorJobsContext([]);

  const longitude = props.contractor.location.coordinates[0];
  const latitude = props.contractor.location.coordinates[1];

  const onSelect = (client) => {
    setSelected(client);
    console.log("Selected Client: ", client);
    contractorJobsDispatch({
      type: CONTRACTOR_MAP_CLIENT_SELECTED,
      client: client
    })
  };

  const onSetRadius = (radiusInMiles) => {
    setRadius(radiusInMiles);
  };

  useEffect(() => {
    async function getClientJobsInRadius() {
      API.getJobsInRadius(longitude, latitude, currentRadius)
        .then((res) => {
          const data = {
            mapStyles: {
              height: "600px",
              width: "100%",
            },
            defaultCenter: {
              lat: latitude,
              lng: longitude,
            },
            clients: res.data,
          };

          setMapStateData(data);
        })
        .catch((err) => console.log(err));
    }

    getClientJobsInRadius();
  }, [longitude, latitude, currentRadius]);

  function renderMarkers() {
    console.log("Clients Map Data:", mapStateData.clients);

    if (mapStateData && mapStateData.clients) {
      mapStateData.clients.map((client) => {
        return (
          <Marker key={client.email} position={client.location.coordinates} />
        );
      });
    } else {
      return null;
    }
  }

  return (
    <div className="mt-2 ml-5">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-secondary" type="button">
            Search
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter search radius in miles"
          aria-label=""
          aria-describedby="basic-addon1"
          defaultValue={currentRadius}
          onChange = {event => onSetRadius(event.target.value)}
        />
      </div>
      <LoadScript googleMapsApiKey="AIzaSyDH6tFUYbWJcIgzAcqC6qW_Spr3IIfR7mY">
        <GoogleMap
          mapContainerStyle={mapStateData.mapStyles}
          zoom={10}
          center={mapStateData.defaultCenter}
        >
          {mapStateData.clients
            ? mapStateData.clients.map((client) => {
                return (
                  <Marker
                    key={client.email}
                    position={{
                      lat: client.location.coordinates[1],
                      lng: client.location.coordinates[0],
                    }}
                    onClick={() => onSelect(client)}
                  />
                );
              })
            : null}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
