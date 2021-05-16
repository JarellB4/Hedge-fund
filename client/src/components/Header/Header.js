import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/styles.css";
import "../../Assets/images/img/favicon.ico";
import "./style.css";
import { useContractorContext } from "../../utils/ContractorState";

const Header = () => {
  const [contractorState, contractorDispatch] = useContractorContext();
  return (
    <div className="mt-5">
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container-fluid">
          <h1 className="text-white">Hedge-Fund</h1>
          <button
            className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          {contractorState.contractor._id ? (
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/contractorSearch"
                    className={
                      window.location.pathname === "/contractorSearch"
                        ? "nav-link active nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        : "nav-link nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    }
                  >
                    Job Search
                  </Link>
                </li>

                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    to="/contractorQuotes"
                    className={
                      window.location.pathname === "/contractorQuotes"
                        ? "nav-link active nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                        : "nav-link nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    }
                  >
                    My Quotes
                  </Link>
                </li>
              </ul>
            </div>
          ): null}
        </div>
      </nav>
    </div>
  );
};

export default Header;
