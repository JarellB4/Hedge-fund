import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ContractorImageCarousel from "../components/ContractorImageCarousel";
import ContractorQuoteCard from "../components/ContractorQuoteCard";
import { useContractorContext } from "../utils/ContractorState";
import { useContractorJobsContext } from "../utils/ContractorJobsState";

const ContractorDashboard = (props) => {
  const [contractorState, contractorDispatch] = useContractorContext();
  const [contractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext();

  return (
    <Container fluid>
      <div>
        <header class="masthead bg-primary text-white text-center">
          <div class="container d-flex align-items-center flex-column">
            <h1 class="masthead-heading text-uppercase mb-0">My Quotes</h1>
            <br />
            <div class="divider-custom divider-light">
              <div class="divider-custom-line"></div>
              <div class="divider-custom-icon">
                <i class="fas fa-tools"></i>
              </div>
              <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0"></p>

            <Row className="quadContainer">
              <Col size="md-6" ClassName="quarter">
                <h1>Content1</h1>
              </Col>
              <Col size="md-6" ClassName="quarter">
                <h1>My Quotes</h1>
                {console.log("h", contractorJobsState)}
                {contractorJobsState.contractorJobs.map((job) => (
                  <div>
                    <ContractorImageCarousel images={job.images} />
                    <ContractorQuoteCard job={job}/>
                  </div>
                ))}
              </Col>
              <Col size="md-6" ClassName="quarter">
                <h1>Content3</h1>
              </Col>
              <Col size="md-6" ClassName="quarter">
                <h1>Content4</h1>
              </Col>
            </Row>
          </div>
        </header>
      </div>{" "}
    </Container>
  );
};

export default ContractorDashboard;
