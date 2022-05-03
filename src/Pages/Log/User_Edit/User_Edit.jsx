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
import { Link } from "react-router-dom";

const User_Edit = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4">
            User Edit Log
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
              <Link
                className="btn dropdown-toggle fw-bold focus-none"
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
            <p className="m-2">From End</p>
            <Link
              to="/"
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
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">From End</p>
            <Link
              to="/"
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
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" className="btn btn-lg btn-primary">
              Find Logs
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 text-center mt-5">
            <button type="button" className="btn btn-lg btn-info">
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-0 col-sm-0 col-md-4 col-lg-6 col-xl-6"></div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center my-1"></div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center my-1">
            <form className="container-fluid">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        SHOW
        <span>
          <div className="btn-group bg-orange mx-2">
            <button
              type="button"
              className="btn color-white focus-none btn-sm "
            >
              10
            </button>
            <button
              type="button"
              className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className=""
                />
              </span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  5
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  9
                </Link>
              </li>
            </ul>
          </div>
        </span>
        ENTRIES
      </div>
      <Table />
      <div className="fw-bold my-2">Sharing 0 to of 0 entries</div>
    </>
  );
};

export default User_Edit;
