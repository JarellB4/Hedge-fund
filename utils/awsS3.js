import React, { useState } from "react";

export default {

  awsUploadImage: function (localFilePath) {
    var AWS = require("aws-sdk");

    // Create unique bucket name
    var bucketName = process.env.s3_bucket;
    // Create name for uploaded object key
    var keyName = Date.now();

    var image;
  
    // Create params for putObject call
    let objectParams = { Bucket: bucketName, Key: keyName, Body: image };
    // Create object upload promise
    let uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
      .putObject(objectParams)
      .promise();
    uploadPromise
      .then(function (data) {
        console.log(
          "Successfully uploaded data to " + bucketName + "/" + keyName
        );
      })
      .catch(function (err) {
        console.error(err, err.stack);
      });
  }
}


// const awsupload = (props) => {
//   // Load the SDK and UUID
//   var AWS = require("aws-sdk");

//   // Create unique bucket name
//   var bucketName = process.env.s3_bucket;
//   // Create name for uploaded object key
//   var keyName = Date.now();

//   const [image, setImage] = useState({});

//   setSelected(image);

//   // Create params for putObject call
//   let objectParams = { Bucket: bucketName, Key: keyName, Body: image };
//   // Create object upload promise
//   let uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
//     .putObject(objectParams)
//     .promise();
//   uploadPromise
//     .then(function (data) {
//       console.log(
//         "Successfully uploaded data to " + bucketName + "/" + keyName
//       );
//     })
//     .catch(function (err) {
//       console.error(err, err.stack);
//     });
// };
