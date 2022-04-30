import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Table/Table";

const Deposit_Report = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4">
            Deposit Report
          </div>
          <div className="col-3 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>

          <div className="col-2 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>
          <div className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-flex flex-row">
            <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1" />
            <div className="dropdown ms-1 bg-transparent">
              <a
                className="btn dropdown-toggle fw-bold"
                href="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Timothy
                <span className="ps-2">
                  <FontAwesomeIcon icon={faAngleDown} className="fw-bold" />
                </span>
              </a>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">From Date</p>
            <a
              href="/"
              className="nav-link border text- my-2 py-3  navbar-border-radius bg-orange color-white "
              aria-current="page"
            >
              <span className="text-start">mm/dd/yyyyy-:--</span>
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">From End</p>
            <a
              href="/"
              className="nav-link border text- my-2 py-3  navbar-border-radius bg-orange color-white "
              aria-current="page"
            >
              <span className="text-start">mm/dd/yyyyy-:--</span>
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" class="btn btn-lg btn-primary">
              Process
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" class="btn btn-lg btn-info">
              Clear
            </button>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Deposit_Report;