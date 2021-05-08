import axios from "axios";
import {streetAddress1, city, state, zip} from "../../../models/Client";

const queryParams = "&key=b0ef02e3d61149c4b983c959417f6f13";

export default {
  //gets location based on user or client based information
  getUserLocation: function() {
    return axios.get("https://api.opencagedata.com/geocode/v1/geojson?q=" + streetAddress1+ "%2C" + city + "%2C" + state + "%2C" + zip + queryParams)
  }
};