import { useContractorJobsContext } from "../utils/ContractorJobsState";

import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { useClientContext } from "../utils/ClientState";
import ClientJobCard from "../components/ClientJobCard";
import ClientJobList from "../components/ClientJobList";

const ClientMain = (props) => {
  const [ClientState, clientdispatch] = useClientContext();

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
            <Col size="md-6" >
              <h1 className="text-uppercase mb-0">My Jobs</h1>
              {/* {
                ContractorJobsState.contractorJobs.length > 0 ? 
                  <ClientJobList jobs={ContractorJobsState.contractorJobs} />
                : null} */}
                  {/* <ClientJobList jobs={ClientState.client.jobs} /> */}
                  <ClientJobList />
            </Col>
            <Col size="md-6" className="mr-5">
              <h1 className="text-uppercase mb-0 mr-5" >Job Details</h1>
              {/* {
                ContractorJobsState.selectedJob._id ? 
                    <ClientJobCard job={ContractorJobsState.selectedJob} />
                : null} */}
                    {console.log("ClientMain ", ClientState)}
                    <ClientJobCard />

            </Col>
          </Row>
        </header>
      </div>
    </Container>
  );
};

export default ClientMain;
