import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { useContractorContext } from "../utils/ContractorState";
import { useContractorJobsContext } from "../utils/ContractorJobsState";
import MapContainer from "../components/MapContainer";
import ContractorJobSearchList from "../components/ContractorJobSearchList";

const ContractorSearch = (props) => {
  const [ContractorState, constractorDispatch] = useContractorContext();
  const [ContractorJobsState, contractorJobsDispatch] = useContractorJobsContext();

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
              <h1 className="text-uppercase mb-0 ml-5">Job Search</h1>
              {ContractorState.contractor._id ? (
                <MapContainer
                  contractor={ContractorState.contractor}
                ></MapContainer>
              ) : null}
            </Col>
            <Col size="md-6" className="">
              <h1 className="text-uppercase mb-0">Availabe Jobs</h1>
              {
                ContractorJobsState.mapSelectedClient._id ? 
                    // <ContractorJobSearchList client={ContractorJobsState.mapSelectedClient} />
                    <ContractorJobSearchList />
                : null}
            </Col>
          </Row>
        </header>
      </div>
    </Container>
  );
};

export default ContractorSearch;
