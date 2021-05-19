import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useContractorContext } from "../../utils/ContractorState";
import { useContractorJobsContext } from "../../utils/ContractorJobsState";
import ContractorImageCarousel from "../ContractorImageCarousel";
import { CONTRACTOR_MAP_JOB_QUOTE_UPDATE, CONTRACTOR_MAP_JOB_QUOTE_CREATED } from "../../utils/actions";
import API from "../../utils/API"
import "./style.css";

//contractorDashboard page, shows the jobs the contractor has quotes on

const ContractorMapQuoteCard = (props) => {

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
    const quote = contractorJobsState.mapSelectedJob.quotes.find(quote => quote.contractor === contractorState.contractor._id);
    const quoteClone = { ...quote };
    return quoteClone;
  });
  const [currentJob, setCurrentJob] = useState(contractorJobsState.mapSelectedJob);
  const previousSelectedJob = usePrevious(currentJob);

  // utilizing useEffect to keep track of "pathname" changes 
  // that, upon change, will update the "currentPage" state
  useEffect(() => {
    if(previousSelectedJob && previousSelectedJob._id !== contractorJobsState.mapSelectedJob._id) {
      setIsEditing(false);
    }
  }, [contractorJobsState.mapSelectedJob]);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = () => {
    setIsEditing(false);

    if(quoteData.price !== '' && quoteData.description !== '') {
      API.updateContractorJobQuote(contractorState.contractor._id, contractorJobsState.mapSelectedJob._id, quoteData)
        .then((res) => {
          contractorJobsDispatch({
            type: CONTRACTOR_MAP_JOB_QUOTE_UPDATE,
            job: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
    else {
      const quote = contractorJobsState.mapSelectedJob.quotes.find(quote => quote.contractor === contractorState.contractor_id);
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

  const hasJobQuote = () => {
    let quoteIndex = contractorJobsState.mapSelectedJob.quotes.findIndex(
      (quote) => quote.contractor === contractorState.contractor._id
    );
    return quoteIndex >= 0;
  };

  const createQuote = () => {
    const price = document.getElementById('newPrice').value;
    const description = document.getElementById('newDescription').value;

    API.createContractorJobQuote(contractorState.contractor._id, contractorJobsState.mapSelectedJob._id, {price: price, description: description})
    .then((res) => {
      contractorJobsDispatch({
        type: CONTRACTOR_MAP_JOB_QUOTE_CREATED,
        job: res.data,
      });
    })
    .catch((err) => console.log(err));


    setShowModal(false);
  };

  return (
    <div className="mt-2">
      <div>
        <div className="card mr-4">
          <ContractorImageCarousel images={contractorJobsState.mapSelectedJob.images} />
          <div className="card-body text-dark">
          <h4 className="card-title">
              {contractorJobsState.mapSelectedClient.firstName + " " + contractorJobsState.mapSelectedClient.lastName}
            </h4>
            <h5>
              {contractorJobsState.mapSelectedClient.streetAddress1 +
                ", " +
                contractorJobsState.mapSelectedClient.city +
                ", " +
                contractorJobsState.mapSelectedClient.state +
                " " +
                contractorJobsState.mapSelectedClient.zip}
            </h5>
            <h5 className="card-title ">
              {"Email: " + contractorJobsState.mapSelectedClient.email}
            </h5>
            <h5>
              Last Updated:{" "}
              {new Date(contractorJobsState.mapSelectedJob.dateUpdated).toLocaleDateString()}
            </h5>
            <h4 className="card-title ">{contractorJobsState.mapSelectedJob.title}</h4>
            <div className="flex-grow-1">
              <p className="card-text ">{contractorJobsState.mapSelectedJob.description}</p>
            </div>
          </div>
                {console.log("hasJobQuote", hasJobQuote())}
              {
                hasJobQuote() === false ? 
                <button
                  type="button"
                  title="Post a new job"
                  className="btn btn-small btn-white mb-2"
                  aria-label="Post a new job"
                  onClick={() => showModal()}
                  >
                  <FontAwesomeIcon icon={["fas", "plus"]}  size="2x"/>
                </button>
              : null
              }

          <ul className="list-group">
            {console.log("props.jobs ", contractorJobsState.mapSelectedJob)}
            {contractorJobsState.mapSelectedJob.quotes.map((quote, index) => (
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
            Post a quote for this job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <input
                className="form-control"
                type="text"
                id="newPrice"
                defaultValue="Enter a quote price"
              />
              <textarea 
                className="form-control"
                type="text"
                id="newDescription"
                defaultValue="Enter a quote description"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createQuote}>Post Quote</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ContractorMapQuoteCard;
