// Load the SDK and UUID
var AWS = require("aws-sdk");

// Create unique bucket name
var bucketName = process.env.s3_bucket;
// Create name for uploaded object key
var keyName = Date.now() + ".txt";

// Create params for putObject call
var objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };
// Create object upload promise
var uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
  .putObject(objectParams)
  .promise();
uploadPromise
  .then(function (data) {
    console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });

  module.export

  //sampleFile = req.files.NAMEOFTHEINPUT.data

  //Body: NAMEOFTHEINPUT.data