import React from "react";
import { useContractorContext } from "../../utils/ContractorState";
import ContractorImageCarousel from "../ContractorImageCarousel";
import "./style.css";

//contractorDashboard page, shows the jobs the contractor has quotes on

const ContractorQuoteCard = (props) => {
  const [ContractorState, dispatch] = useContractorContext();

  return (
    <div>
      <div>
        <div className="card" style={{ width: 60 + "rem" }}>
          <ContractorImageCarousel images={props.job.images}/>
          <div className="card-body">
            <h4 className="card-title ">
              {props.job.client.firstName + " " + props.job.client.lastName + ", " + props.job.client.city}
            </h4>
            <h5 className="card-title ">{props.job.title}</h5>
            <div className="flex-grow-1">
              <p className="card-text ">{props.job.description}</p>
            </div>
          </div>
          <ul className="list-group">
            {console.log("props.jobs ",props.job)}
            {props.job.quotes.map((quote, index) => (
              <li className="list-group-item" key={quote.contractor}>
                <div>
                  <h3>{quote.price}</h3>
                </div>
                <div className="flex-grow-1">
                  <p className="card-text ">{quote.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContractorQuoteCard;
