import React from 'react'


function QuoteList (props) {
    const quotes = props.quotes;
    const listItems = quotes.map((quote) =>
    <li>
       {quote} 
    </li>
    );
    return (
        <ul className="list-group list-group-flush">
        {listItems}
      </ul> 
    );
}
const CustomerCard = (props) => {
   
    return (
        <div>
           <div className="card" style="width: 18rem;">
           <img className="card-img-top" alt={props.name} src={props.image} />
  <div className="card-body">
  <h5 className="card-title ">{props.name}</h5>
  <div className="flex-grow-1"><p className="card-text ">{props.description}</p></div>
  </div>
  <h3 className="card-title ">Quotes</h3>

  <QuoteList quote = {props.quotes} />
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

        </div>
    )
}

export default CustomerCard
