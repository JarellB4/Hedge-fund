import axios from "axios";

export default axios.create({
    baseURL: "https://hedgefundphotos.s3.us-east-2.amazonaws.com",
    headers: {
        "Content-type": "application/json"
    }
})