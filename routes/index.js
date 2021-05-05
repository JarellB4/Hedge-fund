const router = require("express").Router();
const clientRoutes = require("./clients");
const jobRoutes = require("./jobs");
const contractorRoutes = require("./contractors");

//routes
router.use("/clients", clientRoutes);
router.use("/jobs", jobRoutes);
router.use("/contractors", contractorRoutes);

module.exports = router;
