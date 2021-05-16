import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { useContractorContext } from "../utils/ContractorState";
import { useContractorJobsContext } from "../utils/ContractorJobsState";
import ContractorQuoteCard from "../components/ContractorQuoteCard";

const ContractorQuotes = (props) => {
  const [ContractorState, dispatch] = useContractorContext();
  const [ContractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext();

  return (
    <Container fluid>
      <div>
        <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <h1 class="masthead-heading text-uppercase mb-0">My Jobs</h1>
            <br />
            <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-tools"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
          </div>
          <Row>
            <Col size="md-4" className="">
              <h1 className="text-uppercase mb-0">My Jobs1</h1>
            </Col>
            <Col size="md-8" className="">
              <h1 className="text-uppercase mb-0">My Jobs2</h1>
              {ContractorJobsState.contractorJobs.jobs
                ? ContractorJobsState.contractorJobs.jobs.map((job) => (
                    <ContractorQuoteCard job={job} />
                  ))
                : null}
            </Col>
          </Row>
        </header>
      </div>
    </Container>
  );
};

export default ContractorQuotes;
