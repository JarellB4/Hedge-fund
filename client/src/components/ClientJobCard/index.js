import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useClientContext } from "../../utils/ClientState";
import ContractorImageCarousel from "../ContractorImageCarousel";
import { CLIENT_JOB_UPDATED } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";

//contractorDashboard page, shows the jobs the contractor has quotes on

const ClientJobCard = (props) => {
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const [isUpdating, setIsUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setShowModal] = useState(false);
  const [SelectedJobState, clientJobDispatch] = useClientContext();

  const [currentJob, setCurrentJob] = useState(props.job);
  const previousSelectedJob = usePrevious(currentJob);
  const [ClientState, clientDispatch] = useClientContext();

  const [quoteData, setQuoteData] = useState(() => {
    // const quote = props.job.quotes.find(
    //   (quote) => quote.contractor === contractorState.contractor._id
    // );
    // const quoteClone = { ...quote };
    // return quoteClone;
  });

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    setIsEditing(false);

    if (
      ClientState.selectedJob.title !== "" &&
      ClientState.selectedJob.description !== ""
    ) {
      API.updateClientJob(ClientState.client._id, ClientState.selectedJob)
        .then((res) => {
          clientDispatch({
            type: CLIENT_JOB_UPDATED,
            job: res.data,
          });
        })
        .catch((err) => console.log(err));
    } else {
      // const quote = props.job.quotes.find(
      //   (quote) => quote.contractor === contractorState.contractor_id
      // );
      // const quoteClone = { ...quote };
      // setQuoteData(quoteClone);
      showModal();
    }
  };

  const onPhotoEdit = () => {
    setIsUpdating(true);
  };

  const onPhotoSave = () => {
    setIsUpdating(false);
    initUpload();
  };

  const onPhotoUpdateJob = (url) => {

    if (url !== "") {
      ClientState.selectedJob.images.push({image: url});
      API.updateClientJob(ClientState.client._id, ClientState.selectedJob)
        .then((res) => {
          clientDispatch({
            type: CLIENT_JOB_UPDATED,
            job: res.data,
          });
        })
        .catch((err) => console.log(err));
    } else {
      showModal();
    }
  };

  const showModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const updateClientJobTitle = (title) => {
    ClientState.selectedJob.title = title;
  };

  const updateClientJobDescription = (description) => {
    ClientState.selectedJob.description = description;
  };

  /*
      Function to carry out the actual PUT request to S3 using the signed request from the app.
    */
  const uploadFile = (file, signedRequest, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", signedRequest);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById("preview").src = url;
          document.getElementById("avatar-url").value = url;

          // This is where we update the job with the url.
          onPhotoUpdateJob(url);
        } else {
          alert("Could not upload file.");
        }
      }
    };
    xhr.send(file);
  }

  /*
        Function to get the temporary signed request from the app.
        If request successful, continue to upload the file using this signed
        request.
      */
  const getSignedRequest = (file) => {
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
    API.getFileUploadSignedRequest(file)
    .then(res => {
      uploadFile(file, res.data.signedRequest, res.data.url);
    })
    .catch((err) => console.log(err));
  }

  /*
       Function called when file input updated. If there is a file selected, then
       start upload procedure by asking for a signed request from the app.
      */
  const initUpload = () => {
    const files = document.getElementById("file-input").files;
    const file = files[0];
    if (file == null) {
      return alert("No file selected.");
    }
    getSignedRequest(file);
  }

  //ADDING SECTION TO UPLOAD TO AMAZON S3

  return (
    <div className="mt-2">
      <div>
        {ClientState.selectedJob._id ? (
          <div className="card mr-4">
            <ContractorImageCarousel images={ClientState.selectedJob.images} />
            <div className="card-body text-dark">
              <div>
                {isEditing ? (
                  <button
                    type="button"
                    className="btn btn-small btn-danger float-right mb-2"
                    aria-label="save"
                    onClick={() => onSave()}
                  >
                    <FontAwesomeIcon icon={["fas", "save"]} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-small btn-danger float-right mb-2"
                    aria-label="edit"
                    onClick={() => onEdit()}
                  >
                    <FontAwesomeIcon icon={["fas", "pen"]} />
                  </button>
                )}
                {isUpdating ? (
                  <button
                    type="button"
                    className="btn btn-small btn-danger float-right mb-2"
                    aria-label="save"
                    onClick={() => onPhotoSave()}
                  >
                    <FontAwesomeIcon icon={["fas", "save"]} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-small btn-danger float-right mb-2"
                    aria-label="edit"
                    onClick={() => onPhotoEdit()}
                  >
                    <FontAwesomeIcon icon={["fas", "camera"]} />
                  </button>
                )}
              </div>
              <h5>
                Last Updated:{" "}
                {new Date(
                  ClientState.selectedJob.dateUpdated
                ).toLocaleDateString()}
              </h5>{" "}
              <div>
                {isEditing ? (
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={ClientState.selectedJob.title}
                      onChange={(event) =>
                        updateClientJobTitle(event.target.value)
                      }
                    />
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={ClientState.selectedJob.description}
                      onChange={(event) =>
                        updateClientJobDescription(event.target.value)
                      }
                    />
                  </div>
                ) : (
                  <div>
                    <h4 className="card-title ">
                      {ClientState.selectedJob.title}
                    </h4>
                    <div className="flex-grow-1">
                      <p className="card-text ">
                        {ClientState.selectedJob.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {isUpdating ? (
                  <div>
                    <input
                      className="form-control"
                      type="file"
                      id="file-input"
                    />
                    <img id="preview" src="/images/default.png" alt="Default" />
                  </div>
                ) : null}
              </div>
            </div>
            <ul className="list-group">
              {console.log(
                "ClientState.client.jobs.quotes ",
                ClientState.selectedJob.quotes
              )}

              {ClientState.selectedJob.quotes
                ? ClientState.selectedJob.quotes.map((quote, index) => (
                    <li className="list-group-item" key={index}>
                      <h4>Price: $ {quote.price}</h4>
                      <p>{quote.description}</p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        ) : null}
      </div>
      <Modal
        show={isModalOpen}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Job Fields Required
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Validation Error</h4>
          <p>Title and Description are required fields.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClientJobCard;
