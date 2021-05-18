import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { useContractorContext } from "../utils/ContractorState";
import { useContractorJobsContext } from "../utils/ContractorJobsState";
import ContractorQuoteCard from "../components/ContractorQuoteCard";
import ContractorQuoteList from "../components/ContractorQuoteList";

const ContractorQuotes = (props) => {
  const [ContractorState, dispatch] = useContractorContext();
  const [ContractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext();

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
              {
                ContractorJobsState.contractorJobs.length > 0 ? 
                  <ContractorQuoteList jobs={ContractorJobsState.contractorJobs} />
                : null}
            </Col>
            <Col size="md-6" className="mr-5">
              <h1 className="text-uppercase mb-0 mr-5" >Job Details</h1>
              {
                ContractorJobsState.selectedJob._id ? 
                    <ContractorQuoteCard job={ContractorJobsState.selectedJob} />
                : null}
            </Col>
          </Row>
        </header>
      </div>
    </Container>
  );
};

export default ContractorQuotes;
