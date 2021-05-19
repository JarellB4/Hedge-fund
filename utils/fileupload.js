const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const AWS = require("aws-sdk");

// Specify bucket to use
const bucketName = process.env.s3_bucket;

//specify access key & secret access key
const aws_access_key_id = process.env.aws_access_key_id;
const aws_secret_access_key = process.env.aws_secret_access_key;

// default options
app.use(fileUpload());

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile.data;
  console.log(sampleFile.location)
//   uploadPath = __dirname + "/somewhere/on/your/server/" + sampleFile.name;
//   var keyName = Date.now() + ".txt";

  // Create params for putObject call
  var objectParams = { Bucket: bucketName, Key: sampleFile, Body: "test" };
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
