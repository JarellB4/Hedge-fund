import React, { useState } from "react";
import "./style.css";
import { useClientContext } from "../../utils/ClientState";
import { CLIENT_JOB_SELECTED } from "../../utils/actions";

const ClientJobList = (props) => {
  const [selected, setSelected] = useState({});
  const [ClientState, clientdispatch] = useClientContext();

  const onSelect = (job) => {
    setSelected(job);
    console.log("Selected job: ", job);
    clientdispatch({
      type: CLIENT_JOB_SELECTED,
      job: job,
    });
  };

  return (
    <div className="ml-5 mt-3 text-dark">
      <div>
        <div className="list-group">
          {ClientState.client.jobs
            ? ClientState.client.jobs.map((job, index) => (
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
                    <h4>Number of quotes: {job.quotes ? job.quotes.length : 0}</h4>
                  </div>
                </button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ClientJobList;
