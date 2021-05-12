const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
var AWS = require("aws-sdk");

// default options
app.use(fileUpload());

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // Specify bucket to use
  var bucketName = process.env.s3_bucket;
  // Create name for uploaded object key

// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile.data;
//   uploadPath = __dirname + "/somewhere/on/your/server/" + sampleFile.name;
//   var keyName = Date.now() + ".txt";

  // Create params for putObject call
  var objectParams = { Bucket: bucketName, Key: sampleFile, Body: "Hello World!" };
  // Create object upload promise
  var uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
    .putObject(objectParams)
    .promise();
  uploadPromise
    .then(function (data) {
      console.log(
        "Successfully uploaded data to " + bucketName + "/" + sampleFile
      );
    })
    .catch(function (err) {
      console.error(err, err.stack);
    });


  // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);

//     res.send("File uploaded!");
//   });
});
