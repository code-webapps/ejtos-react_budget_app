import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";


const Currency = () => {
  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //state hook update our component
  const [isOpen, setIsOpen] = useState(false);

  //update currency in global state
  const setCurrencyHandler = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };

  //  change this '£' '€' '$' '₹'

  const currencyLabel = () => {
    switch (currency) {
      case "$":
        return "$ Dollar";
      case "£":
        return "£ Pound";
      case "€":
        return "€ Euro";
      case "₹":
        return "₹ Ruppee";
      default:
        return "";
    }
  };
      // get the valuta changer function
  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: "pointer"}}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "#93e399"}}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {"("}
        {currencyLabel()}
        {")"}
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? "show" : ""} `}>
        <li>
          <button
            className="dropdown-item" 
            type="button"
            onClick={() => setCurrencyHandler("$")}
            style={{backgroundColor: "#93e399"}}
          >
            $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("£")}
            style={{ backgroundColor: "#93e399"}}
          >
            £ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("€")}
            style={{ backgroundColor: "#93e399"}}
          >
            € Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler("₹")}
            style={{ backgroundColor: "#93e399"}}
          >
            ₹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;