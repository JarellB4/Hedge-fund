import React from "react";
import "./style.css";

const CustomerCard = (props) => {
  
  return (
    <div>
      <div className="card" style={{width: 18 + "rem"}}>
        <img
          className="card-img-top"
          alt={props.title}
          src={props.image}
        />
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <div className="flex-grow-1">
            <p className="card-text ">{props.description}</p>
          </div>
        </div>
        <ul className="list-group">
          {props.quotes.map((quote, index) => (
          <li className="list-group-item" key={quote.contractor}>
            <div>{quote.contractor.companyName}</div>
            <div>{quote.price}</div>
            <div>{quote.description}</div>
          </li>
        ))}
      </ul>
        
      </div>
    </div>
  );
};

export default CustomerCard;
