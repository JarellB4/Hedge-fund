import React from "react";
import { useClientContext } from "../../utils/ClientState";
import { Container } from "../Grid";
import "./style.css";
import ContractorImageCarousel from "../ContractorImageCarousel";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
//javier new addition
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const JobCustomerCard = (props) => {
  const [clientState, dispatch] = useClientContext();

  return (
    <Container>
        <Card style={{ width: 30 + "rem" }}>
          <ContractorImageCarousel images />
            <InputGroup className="mb-3">
              <FormControl
                placeholder={props.job.title}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                as="textarea"
                aria-label="Job Description"
                placeholder={props.job.description}
              />
            </InputGroup>

            <Card.Body>
              {props.job.quotes.map((quote, index) => (
                <ListGroup variant="flush" key={quote.contractor._id}>
                  <ListGroup.Item>Company: {quote.contractor.companyName}</ListGroup.Item>
                  <ListGroup.Item>Price: ${quote.price}</ListGroup.Item>
                  <ListGroup.Item>{quote.description}</ListGroup.Item>
                  <ListGroup.Item>Phone Number: {quote.contractor.phone}</ListGroup.Item>
                  <ListGroup.Item>Address: {quote.contractor.streetAddress1} {quote.contractor.StreetAddress2} {quote.contractor.city}, {quote.contractor.state}, {quote.contractor.zip}</ListGroup.Item>
                </ListGroup>
              ))}
            </Card.Body>          
        </Card>
    </Container>
  );
};

export default JobCustomerCard;

/*
<ul className="list-group">
            {/* {console.log("props.jobs ",props.job)} */

//            <li className="list-group-item">
//              <div>
//                <h3>hjhjh</h3>
//              </div>
//              <div className="flex-grow-1">
//                <p className="card-text "></p>
//              </div>
//            </li>
//          </ul>
