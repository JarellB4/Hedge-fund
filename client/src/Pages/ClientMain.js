import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CustomerCard from "../components/CustomerCard/CustomerCard";
import { useClientContext } from "../utils/ContractorState";

const ClientMain = (props) => {
  const [clientState, dispatch] = useClientContext();

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

            <Row>
              <Col size="md-6" className="col-project">
                {clientState.client.jobs.map((job) => (
                  <Col size="md-4" className="col-project">
                    <CustomerCard
                      key={job._id}
                      image={job.images[0].image}
                      name={job.title}
                      description={job.description}
                      quotes={job.quotes}
                    />
                  </Col>
                ))}
              </Col>
              <Col size="md-6" className="col-project">
                <h1 class="masthead-heading text-uppercase mb-0">My Jobs</h1>
              </Col>
            </Row>
          </div>
        </header>
      </div>{" "}
    </Container>
  );
};

export default ClientMain;
