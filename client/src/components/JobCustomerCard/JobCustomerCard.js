import React from "react";
import { useClientContext } from "../../utils/ClientState";
import { Container } from "../Grid";
import "./style.css";
import ContractorImageCarousel from "../ContractorImageCarousel";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const JobCustomerCard = (props) => {
  const [clientState, dispatch] = useClientContext();

  return (
    <div></div>
    // <div>
    //   <div>
    //     <div className="card" style={{ width: 30 + "rem" }}>
    //       <ContractorImageCarousel images />
    //       <div className="card-body">
    //         <InputGroup className="mb-3">
    //           <FormControl
    //             placeholder="Job Title"
    //             aria-label="Username"
    //             aria-describedby="basic-addon1"
    //           />
    //         </InputGroup>
    //         <InputGroup>
    //           <FormControl as="textarea" aria-label="Job Description" 
    //           placeholder="Job Description"/>
    //         </InputGroup>
    //         <h5 className="card-title ">company price</h5>
    //         <div className="flex-grow-1">
    //           <p className="card-text ">company name</p>
    //           <p className="card-text ">company phone</p>
    //           <p className="card-text ">street adress</p>
    //           <p className="card-text ">city</p>
    //           <p className="card-text ">company state</p>
    //           <p className="card-text ">zip</p>
    //         </div>
    //       </div>
    //       <ul className="list-group">
    //         {/* {console.log("props.jobs ",props.job)} */}

    //         <li className="list-group-item">
    //           <div>
    //             <h3>hjhjh</h3>
    //           </div>
    //           <div className="flex-grow-1">
    //             <p className="card-text "></p>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default JobCustomerCard;