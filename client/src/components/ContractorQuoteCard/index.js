import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useContractorContext } from "../../utils/ContractorState";
import { useContractorJobsContext } from "../../utils/ContractorJobsState";
import ContractorImageCarousel from "../ContractorImageCarousel";
import { CONTRACTOR_JOB_QUOTE_UPDATE } from "../../utils/actions";
import API from "../../utils/API"
import "./style.css";

//contractorDashboard page, shows the jobs the contractor has quotes on

const ContractorQuoteCard = (props) => {

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setShowModal] = useState(false);
  const [contractorState, contractorDispatch] = useContractorContext();
  const [contractorJobsState, contractorJobsDispatch] = useContractorJobsContext();
  const [quoteData, setQuoteData] = useState(() => {
    const quote = props.job.quotes.find(quote => quote.contractor === contractorState.contractor._id);
    const quoteClone = { ...quote };
    return quoteClone;
  });
  const [currentJob, setCurrentJob] = useState(props.job);
  const previousSelectedJob = usePrevious(currentJob);

  // utilizing useEffect to keep track of "pathname" changes 
  // that, upon change, will update the "currentPage" state
  useEffect(() => {
    if(previousSelectedJob && previousSelectedJob._id !== props.job._id) {
      setIsEditing(false);
    }
  }, [props]);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    setIsEditing(false);

    if(quoteData.price !== '' && quoteData.description !== '') {
      API.updateContractorJobQuote(contractorState.contractor._id, props.job._id, quoteData)
        .then((res) => {
          contractorJobsDispatch({
            type: CONTRACTOR_JOB_QUOTE_UPDATE,
            job: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
    else {
      const quote = props.job.quotes.find(quote => quote.contractor === contractorState.contractor_id);
      const quoteClone = { ...quote };
      setQuoteData(quoteClone);
      showModal();
    }
  };

  const updateQuotePrice = (price) => {
    quoteData.price = price;
    setQuoteData(quoteData);
  };

  const updateQuoteDescription = (description) => {
    quoteData.description = description;
    setQuoteData(quoteData);
  };

  const showModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };  

  return (
    <div className="mt-2">
      <div>
        <div className="card mr-4">
          <ContractorImageCarousel images={props.job.images} />
          <div className="card-body text-dark">
          <h4 className="card-title">
              {props.job.client.firstName + " " + props.job.client.lastName}
            </h4>
            <h5>
              {props.job.client.streetAddress1 +
                ", " +
                props.job.client.city +
                ", " +
                props.job.client.state +
                " " +
                props.job.client.zip}
            </h5>
            <h5 className="card-title ">
              {"Email: " + props.job.client.email}
            </h5>
            <h5>
              Last Updated:{" "}
              {new Date(props.job.dateUpdated).toLocaleDateString()}
            </h5>
            <h4 className="card-title ">{props.job.title}</h4>
            <div className="flex-grow-1">
              <p className="card-text ">{props.job.description}</p>
            </div>
          </div>
          <ul className="list-group">
            {console.log("props.jobs ", props.job)}
            {props.job.quotes.map((quote, index) => (
              <li className="list-group-item" key={quote.contractor}>
                {
                  contractorState.contractor._id === quote.contractor ? 
                    <div>
                      {isEditing ? (
                        <button
                          type="button"
                          className="btn btn-small btn-danger float-right mb-2"
                          aria-label="save"
                          onClick={() => onSave()}
                        >
                          {/* <i class="fas fa-save text-white"></i> */}
                          <FontAwesomeIcon icon={["fas", "save"]} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-small btn-danger float-right mb-2"
                          aria-label="edit"
                          onClick={() => onEdit()}
                        >
                          {/* <i class="fas fa-pen text-white"></i> */}
                          <FontAwesomeIcon icon={["fas", "pen"]} />
                        </button>
                      )}
                    </div>
                : null  
                }
                <div>
                {isEditing && contractorState.contractor._id === quote.contractor ? (
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={quote.price}
                      onChange={event => updateQuotePrice(event.target.value)}
                    />
                  ) : (
                    <h3>Price: ${parseFloat(quote.price).toFixed(2)}</h3>
                  )}
                </div>
                <div className="flex-grow-1">
                {isEditing && contractorState.contractor._id === quote.contractor ? (
                    <textarea 
                      className="form-control" 
                      rows="3" 
                      cols="50" 
                      defaultValue={quote.description} 
                      onChange={event => updateQuoteDescription(event.target.value)}
                    />
                  ) : (
                    <p className="card-text ">{quote.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        show={isModalOpen}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Quote Fields Required
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Validation Error</h4>
          <p>
            Price and Description are required fields.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ContractorQuoteCard;
