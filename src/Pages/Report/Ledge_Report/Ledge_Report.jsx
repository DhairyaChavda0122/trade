import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import { Link } from "react-router-dom";
import Calender from "../../Components/Calender/Calender";
import Notifications from "../../Components/Notifications/Notifications";


const Ledge_Report = () => {
  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4">
            Ledge Report
          </div>
          <div className="col-3 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>

          <div className="col-2 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
            <Notifications />
          </div>
          <div className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-flex flex-row">
            <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1" />
            <div className="dropdown ms-1 bg-transparent">
              <Link
                className="btn fw-bold focus-none"
                to="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Timothy
                <span className="ps-2">
                  <FontAwesomeIcon icon={faAngleDown} className="fw-bold" />
                </span>
              </Link>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">From Date</p>
            <Calender />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">From End</p>
            <Calender />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" className="btn btn-lg btn-primary">
              Process
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" className="btn btn-lg btn-info">
              Clear
            </button>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Ledge_Report;
