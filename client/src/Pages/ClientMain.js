import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Container } from "../components/Grid";
import { useClientContext } from "../utils/ClientState";
import ClientJobCard from "../components/ClientJobCard";
import ClientJobList from "../components/ClientJobList";
import { CLIENT_JOB_CREATED } from "../utils/actions";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../utils/API";

const ClientMain = (props) => {
  const [ClientState, clientDispatch] = useClientContext();
  const [isModalOpen, setShowModal] = useState(false);

  const showModal = () => {
    setShowModal(true);
  };

  const createJob = () => {
    const title = document.getElementById('newTitle').value;
    const description = document.getElementById('newDescription').value;

    API.createClientJob(ClientState.client._id, {title: title, description: description})
    .then((res) => {
      clientDispatch({
        type: CLIENT_JOB_CREATED,
        job: res.data,
      });
    })
    .catch((err) => console.log(err));


    setShowModal(false);
  };

  return (
    <Container fluid>
      <div>
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            <h1 className="masthead-heading text-uppercase mb-0">My Jobs</h1>
            <br />
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
          </div>
          <Row>
            <Col size="md-6">
              <h1 className="text-uppercase mb-0">My Jobs</h1>
              <button
                type="button"
                class="btn btn-light mt-2"
                onClick={() => showModal()}
              >
                Post a new job
              </button>
              {console.log("ClientState.client", ClientState.client)}
              <ClientJobList />
            </Col>
            <Col size="md-6" className="mr-5">
              <h1 className="text-uppercase mb-0 mr-5">Job Details</h1>
              {console.log("ClientMain ", ClientState)}
              <ClientJobCard />
            </Col>
          </Row>
        </header>
      </div>
      <Modal
        show={isModalOpen}
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Post a new job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
              <input
                className="form-control"
                type="text"
                id="newTitle"
                defaultValue="Enter a Job Title"
              />
              <textarea 
                className="form-control"
                type="text"
                id="newDescription"
                defaultValue="Enter a Job Description"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createJob}>Create</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ClientMain;
