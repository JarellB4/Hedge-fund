import React from "react";
import { useClientContext } from "../utils/ClientState";

const CustomerCard = (props) => {
  const [clientState, dispatch] = useClientContext();

  // function QuoteList(props) {
  //   // const quotes = clientState.client.jobs.quotes;
  //   const listItems = clientState.client.jobs.quotes.map((quote) => <li>{quote}</li>);
  //   return <ul className="list-group list-group-flush">{listItems}</ul>;
  // }

  return (
    <div>
      <div className="card" style={{width: 18 + "rem"}}>
        {/* <img
          className="card-img-top"
          alt={clientState.client.jobs.name}
          src={clientState.client.jobs.image}
        /> */}
        <div className="card-body">
          <h5 className="card-title ">{clientState.client.jobs.title}</h5>
          <div className="flex-grow-1">
            <p className="card-text ">{clientState.client.jobs.description}</p>
          </div>
        </div>
        <h3 className="card-title ">Quotes</h3>

        {/* <QuoteList quote={clientState.client.jobs.quotes} /> */}
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
