/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    //get all users
    getAllClients: function () {
        return axios.get("/api/clients");
    },
    //get user with specific id
    getClient: function(id) {
        return axios.get("/api/clients/" + id);
    },
    //get user with specific email
     clientLogin: function(email, password) {
        return axios.post("/api/clients/login", { email: email, password: password });
    },
    //get user with specific email
    contractorLogin: function(email, password) {
        return axios.post("/api/contractors/login", { email: email, password: password });
    },
     //get user with specific email
     getClientByEmail: function(email) {
        return axios.get("/api/clients/signin/" + email);
    },
    getContractorByEmail: function(email) {
        return axios.get("/api/contractors/signin/" + email);
    },
    saveClient: function(clientData) {
        return axios.get("/api/clients/", clientData);
    },

    getJob: function() {
        return axios.get("/api/job");
    },

    updateClientJob: function(clientId ,job) {
        return axios.put(`/api/jobs/client/${clientId}`, job);
    },

    createClientJob: function(clientId ,job) {
        return axios.post(`/api/jobs/client/${clientId}`, job);
    },

    getJobs: function(id) {
        return axios.get("/api/job/" + id);
    },
    getJobsInRadius: function(longitude, latitude, radius) {
        return axios.get(`/api/clients/map/${longitude}/${latitude}/${radius}`);
    },
    deleteJob: function(id) {
        return axios.delete("/api/job/" + id)
    },

    getAllContractors: function () {
        return axios.get("/api/contractor");
    },

    getContractor: function(id) {
        return axios.get("api/contractor/" + id);
    },

    saveContractor: function(contractorData) {
        return axios.get("api/contractor/" + contractorData);
    },
    getContractorJobs: function(id) {
        return axios.get("/api/jobs/Contractor/" + id);
    },
    updateContractorJobQuote: function(id, jobId, quote) {
        return axios.put(`/api/jobs/contractor/${id}/${jobId}`, quote);
    },
    createContractorJobQuote: function(id, jobId, quote) {
        return axios.post(`/api/jobs/contractor/${id}/${jobId}`, quote);
    },
    getFileUploadSignedRequest: function(file) {
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET", `/api/jobs/fileSignedRequest/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        // xhr.onreadystatechange = () => {
        //   if (xhr.readyState === 4) {
        //     if (xhr.status === 200) {
        //       const response = JSON.parse(xhr.responseText);
        //       uploadFile(file, response.signedRequest, response.url);
        //     } else {
        //       alert("Could not get signed URL.");
        //     }
        //   }
        // };
        // xhr.send();

        return axios.get(`/api/jobs/fileSignedRequest/?fileName=${file.name}&fileType=${file.type}`);
    }
}