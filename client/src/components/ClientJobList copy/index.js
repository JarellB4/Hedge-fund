import React, { useState } from "react";
import "./style.css";
import { useClientContext } from "../../utils/ClientState";
import { CLIENT_JOB_SELECTED } from "../../utils/actions";

import { useContractorJobsContext } from "../../utils/ContractorJobsState";
//contractorDashboard page, shows the jobs the contractor has quotes on

const ClientJobList = (props) => {
  const [selected, setSelected] = useState({});
  const [contractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext([]);
  const [ClientState, clientdispatch] = useClientContext();

  const onSelect = (job) => {
    setSelected(job);
    console.log("Selected job: ", job);
    contractorJobsDispatch({
      type: CLIENT_JOB_SELECTED,
      job: job,
    });
  };

  return (
    <div className="ml-5 mt-3 text-dark">
      <div>
        <div className="list-group">
          {console.log("ClientState.client.jobs", ClientState.client.jobs)}
          {ClientState.client.jobs.map((job, index) => (
            <button
              type="button"
              className="list-group-item list-group-item-action"
              key={job._id}
              onClick={() => onSelect(job)}
            >
              <div>
                <h3>{job.title}</h3>
              </div>
              <div>
                <h4>
                  Last Updated:{" "}
                  {new Date(job.dateUpdated).toLocaleDateString()}
                </h4>
              </div>
              <div>
                <h4>Number of quotes: {job.quotes.length}</h4>
              </div>
            </button>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default ClientJobList;
