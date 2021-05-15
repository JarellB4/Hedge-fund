import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CustomerCard from "../components/CustomerCard";
import { useClientContext } from "../utils/ClientState";
import JobCustomerCard from "../components/JobCustomerCard/JobCustomerCard";

const ClientMain = (props) => {
  //test 
  const tempJob = {
    "dateCreated": "2021-05-11T14:10:38.941Z",
    "dateUpdated": "2021-05-11T14:10:38.941Z",
    "_id": "609a905e4589cb711c54a95d",
    "client": "609a905e4589cb711c54a950",
    "category": "Remodel1",
    "title": "Bathroom remodel",
    "description": "I have a small 3 piece bathroom that needs remodeling 1",
    "images": [
        {
            "image": "https://via.placeholder.com/300"
        },
        {
            "image": "https://via.placeholder.com/300"
        }
    ],
    "quotes": [
        {
            "dateCreated": "2021-05-11T14:10:38.941Z",
            "dateUpdated": "2021-05-11T14:10:38.941Z",
            "contractor": {
              "location": {
                  "coordinates": [
                      -82.827898,
                      42.632254
                  ],
                  "type": "Point"
              },
              "_id": "609d49e1eb336596d49589aa",
              "email": "roof1@email.com",
              "password": "$2a$10$rrCvSWi9EjdzJBGrG28RgeNIne3kMNCwoLEbcE5zbRcGyW7AFfiEy",
              "companyName": "Schena Roofing & Sheet Metal",
              "phone": "586-949-4777",
              "streetAddress1": "28299 Kehrig St,",
              "StreetAddress2": "",
              "city": "Chesterfield",
              "state": "MI",
              "zip": 48047
          },
            "price": 1000,
            "description": "We typically remodel small 3 piece bathrooms for around $1,000. "
        }
    ]
}
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
              <Col size="md-4" className="col-project">
                {clientState.client.jobs.map((job) => (
                  <Col size="md-6" className="col-project">
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
                  <Col size="md-6" className="col-project">
                  
                    <JobCustomerCard job={tempJob} />
                    
                  </Col>
                
              </Col>
            </Row>
          </div>
        </header>
      </div>{" "}
    </Container>
  );
};

export default ClientMain;
