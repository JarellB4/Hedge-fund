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

    if (ClientState.selectedJob.title !== "" && ClientState.selectedJob.description !== "") {
      API.updateClientJob(
        ClientState.client._id,
        ClientState.selectedJob
      )
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
                    <input
                      className="form-control"
                      type="file"
                      id="file-input"
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
            </div>
            <ul className="list-group">
              {console.log(
                "ClientState.client.jobs.quotes ",
                ClientState.selectedJob.quotes
              )}

              {
               ClientState.selectedJob.quotes ?
              ClientState.selectedJob.quotes.map((quote, index) => (
                <li className="list-group-item" key={quote.contractor}>
                  <h4>Price: $ {quote.price}</h4>
                  <p>{quote.description}</p>
                </li>
              ))
              : null
              }
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
