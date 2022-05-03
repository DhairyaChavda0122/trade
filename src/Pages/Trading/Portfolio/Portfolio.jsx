import React from "react";
import "./Portfolio.css";
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

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-5 fw-bold text-start p-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-7 col-lg-5 col-xl-6">
                  <div className="form-check ">
                    <input
                      className="form-check-input focus-none bg-orange"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      ALL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none bg-orange color-black"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      OUTSTANDING
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-6">
                  <div className="form-check ">
                    <input
                      className="form-check-input focus-none bg-orange"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      CLIENT WISE
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none bg-orange color-black"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      SCRIPT
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-1">
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

      <div className="container">
        <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>         
           <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex flex-row float-end">
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

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">MARKET</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Select Market
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
                    Select Market
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="m-2">SCRIPT</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Select Script
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
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <p className="m-2">EXPIRY DATE</p>
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
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
            <button
              type="button"
              className="btn btn-primary text-center btn-lg fs-6"
            >
              GET POSITION
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
            <button
              type="button"
              className="btn btn-info text-center btn-lg fs-6"
            >
              ROLL OVER ALL
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
            <button
              type="button"
              className="btn btn-danger text-center btn-lg fs-6"
            >
              CLOSE POSITION
            </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2 text-center">
            <button
              type="button"
              className="btn btn-secondary text-center btn-lg fs-6"
            >
              CLEAR FILTER
            </button>
          </div>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Portfolio;
