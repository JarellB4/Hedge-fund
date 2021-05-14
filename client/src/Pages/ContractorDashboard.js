import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ContractorQuoteCard from "../components/ContractorQuoteCard/ContractorQuoteCard";
import { useContractorContext } from "../utils/ContractorState";

const ContractorDashboard = () => {
  const [contractorState, dispatch] = useContractorContext();

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
            <p class="masthead-subheading font-weight-light mb-0"></p>


            <Row className="quadContainer">
                <Col size="md-6" ClassName="quarter">
                  <h1>Content</h1>
                </Col>
                <Col size="md-6" ClassName="quarter">
                  <h1>Content</h1>
                </Col>
                <Col size="md-6" ClassName="quarter">
                  <h1>Content</h1>
                </Col>
                <Col size="md-6" ClassName="quarter">
                  <h1>Content</h1>
                </Col>
            </Row>
          </div>
        </header>
      </div>{" "}
    </Container>
  );
};

export default ContractorDashboard;
