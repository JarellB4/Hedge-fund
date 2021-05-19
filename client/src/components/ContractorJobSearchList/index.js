import React, { useState } from "react";
import "./style.css";
import { useContractorJobsContext } from "../../utils/ContractorJobsState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContractorJobSearchList = (props) => {
  const [selectedJob, setSelectedJob] = useState({});
  const [contractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext([]);

  const onSelectJob = (job) => {
    setSelectedJob(job);
    // console.log("Selected job: ", job);
    // clientdispatch({
    //   type: CLIENT_JOB_SELECTED,
    //   job: job,
    // });
  };

  return (
    <div className="ml-5 mt-3 text-dark">
      <div>
        <div className="card pb-0 pr-4 pt-4">
          <div className="list-group">
            {props.client._id ? (
              selectedJob._id ? (
                <div>
                  <button
                    type="button"
                    title="Post a new job"
                    className="btn btn-small btn-white float-left"
                    aria-label="Post a new job"
                    onClick={() => onSelectJob({})}
                  >
                    <FontAwesomeIcon icon={["fas", "chevron-left"]} size="2x" />
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="pb-3">
                    {props.client.firstName +
                      " " +
                      props.client.lastName +
                      ", " +
                      props.client.city}
                  </h3>
                  <ul>
                    {props.client.jobs
                      ? props.client.jobs.map((job, index) => (
                          <li className="list-group-item" key={job.id}>
                            <h4 className="pt-1 pb-1">
                              Job:{" "}
                              {job.title +
                                ",    Date: " +
                                new Date(job.dateUpdated).toLocaleDateString()}
                              <button
                                type="button"
                                title="Post a new job"
                                className="btn btn-small btn-white float-right"
                                aria-label="Post a new job"
                                onClick={() => onSelectJob(job)}
                              >
                                <FontAwesomeIcon
                                  icon={["fas", "info-circle"]}
                                  size="2x"
                                />
                              </button>
                            </h4>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorJobSearchList;
