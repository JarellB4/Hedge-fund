import React from "react";
import { useClientContext } from "../../utils/ClientState";
import "./style.css";

const CustomerCard = (props) => {
  const [clientState, dispatch] = useClientContext();


  // function QuoteList(props) {

  //   const listItems = props.quotes.map( quote => {
  //     <li>{ quote }</li>
  //     return <ul className="list-group list-group-flush">{ listItems } </ul>
  //   })
  // };

  return (
    <div>
      <div className="card" style={{width: 18 + "rem"}}>
        <img
          className="card-img-top"
          alt={props.title}
          src={props.imageLink}
        />
        {console.log(clientState)}
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="flex-grow-1">
            <p className="card-text ">{props.description}</p>
          </div>
        </div>
        <ul className="list-group">
          {props.quotes.map((quote, index) => (
          <li className="list-group-item" key={quote.contractor}>
            {quote.price}{" "}
          </li>
        ))}
      </ul>
        
      </div>
    </div>
  );
};

export default CustomerCard;
