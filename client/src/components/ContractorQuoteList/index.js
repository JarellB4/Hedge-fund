import React, { useState } from "react";
import "./style.css";
import { CONTRACTOR_JOB_SELECTED } from "../../utils/actions";
import { useContractorJobsContext } from "../../utils/ContractorJobsState";
//contractorDashboard page, shows the jobs the contractor has quotes on

const ContractorQuoteList = (props) => {
  const [ selected, setSelected ] = useState({});
  const [contractorJobsState, contractorJobsDispatch] = useContractorJobsContext([]);

  const onSelect = job => {
    setSelected(job);
    console.log("Selected job: ", job);
    contractorJobsDispatch({
      type: CONTRACTOR_JOB_SELECTED,
      job: job,
    });
}

  return (
    <div className="ml-5 mt-3">
      <div>
        <div className="list-group">
          {console.log("props.jobs ", props.jobs)}
          {props.jobs.map((job, index) => (

            <button type="button" className="list-group-item list-group-item-action" key={job._id} onClick={() => onSelect(job)}> 
              <div>
                <h3>{job.title}</h3>
              </div>
              <div>
                <h4>Last Updated: {new Date(job.dateUpdated).toLocaleDateString()}</h4>
              </div>
              <div>
                <h4>{job.client.firstName} {job.client.lastName} - {job.client.city}, {job.client.state}</h4>
              </div>
              <div className="flex-grow-1">
                <p className="card-text ">{job.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractorQuoteList;
