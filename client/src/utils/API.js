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
     getClientByEmail: function(email) {
        return axios.get("/api/clients/signin/" + email);
    },

    saveClient: function(clientData) {
        return axios.get("/api/clients", clientData);
    },

    getJob: function() {
        return axios.get("/api/job");
    },

    saveJob: function(jobData) {
        return axios.get("/api/job", jobData);
    },

    getJobs: function(id) {
        return axios.get("/api/job/" + id);
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
        return axios.get("api/contractor" + contractorData);
    }
}