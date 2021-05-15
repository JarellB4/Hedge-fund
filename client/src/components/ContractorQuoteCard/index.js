import React from "react";
import { useContractorContext } from "../../utils/ContractorState";
import "./style.css";

const ContractorQuoteCard = (props) => {
  const [ContractorState, dispatch] = useContractorContext();
  
  return (
    <div><h1>Contractor Quote Card</h1></div>
    
  );
};

export default ContractorQuoteCard;
