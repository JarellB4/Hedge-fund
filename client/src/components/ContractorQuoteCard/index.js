import React, { useState } from "react";
import { useContractorContext } from "../../utils/ContractorState";
import ContractorImageCarousel from "../ContractorImageCarousel";
import "./style.css";

//contractorDashboard page, shows the jobs the contractor has quotes on

const ContractorQuoteCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [ContractorState, dispatch] = useContractorContext();
  const onSave = (job) => {
    setIsEditing(false);
    // setSelected(job);
    // console.log("Selected job: ", job);
    // contractorJobsDispatch({
    //   type: CONTRACTOR_JOB_SELECTED,
    //   job: job,
    // });
  };
  const onEdit = (job) => {
    setIsEditing(true);
    // setSelected(job);
    // console.log("Selected job: ", job);
    // contractorJobsDispatch({
    //   type: CONTRACTOR_JOB_SELECTED,
    //   job: job,
    // });
  };

  return (
    <div className="mt-2 mr-5">
      <div>
        <div className="card">
          <ContractorImageCarousel images={props.job.images} />
          <div className="card-body text-dark">
            <h4 className="card-title">
              {props.job.client.firstName + " " + props.job.client.lastName}
            </h4>
            <h5>
              {props.job.client.streetAddress1 +
                ", " +
                props.job.client.city +
                ", " +
                props.job.client.state +
                " " +
                props.job.client.zip}
            </h5>
            <h5 className="card-title ">
              {"Email: " + props.job.client.email}
            </h5>
            <h5>
              Last Updated:{" "}
              {new Date(props.job.dateUpdated).toLocaleDateString()}
            </h5>
            <h4 className="card-title ">{props.job.title}</h4>
            <div className="flex-grow-1">
              <p className="card-text ">{props.job.description}</p>
            </div>
          </div>
          <ul className="list-group">
            {console.log("props.jobs ", props.job)}
            {props.job.quotes.map((quote, index) => (
              <div>
                {console.log(
                  "ContractorState.contractor._id: ",
                  ContractorState.contractor._id
                )}
                {console.log("quote.contractor: ", quote.contractor)}
                {ContractorState.contractor_id === quote.contractor ? (
                  <li className="list-group-item" key={quote.contractor}>
                    <div>
                      {isEditing ? (
                        <button
                          type="button"
                          className="btn btn-small btn-danger float-right mb-2"
                          onClick={() => onSave(props.job, quote)}
                        >
                          <i class="fas fa-save text-white"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-small btn-danger float-right mb-2"
                          onClick={() => onEdit(quote)}
                        >
                          <i class="fas fa-pen text-white"></i>
                        </button>
                      )}
                    </div>
                    <div>
                      {isEditing ? (
                        <input
                          className="form-control"
                          type="nunmber"
                          value={quote.price}
                        />
                      ) : (
                        <h3>{quote.price}</h3>
                      )}
                    </div>
                    <div className="flex-grow-1">
                      {isEditing ? (
                        <textarea className="form-control" rows="3" cols="50">
                          {quote.description}
                        </textarea>
                      ) : (
                        <p className="card-text ">{quote.description}</p>
                      )}
                    </div>
                  </li>
                ) : (
                  <li className="list-group-item" key={quote.contractor}>
                    <h3>Price: ${parseFloat(quote.price).toFixed(2)}</h3>
                    <p>{quote.description}</p>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContractorQuoteCard;
