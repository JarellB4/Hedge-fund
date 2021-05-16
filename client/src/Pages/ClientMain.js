import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CustomerCard from "../components/CustomerCard/CustomerCard";
import { useClientContext } from "../utils/ClientState";

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
          </div>
          <Row>
              <Col size="md-4" className="">
                <h1 className="text-uppercase mb-0">My Jobs1</h1>
              {
                clientState.client.jobs ?              
                  clientState.client.jobs.map((job) => (
                      <CustomerCard
                        key={job._id}
                        image={job.images[0].image}
                        name={job.title}
                        description={job.description}
                        quotes={job.quotes}
                      />
                  ))
                : null
              }
              </Col>
              <Col size="md-8" className="">
                <h1 className="text-uppercase mb-0">My Jobs2</h1>
              </Col>
            </Row>
        </header>
      </div>
    </Container>
  );
};

export default ClientMain;
