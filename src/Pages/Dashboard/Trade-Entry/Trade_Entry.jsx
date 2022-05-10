import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Trade_Entry = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0 fs-5">TRADE ENTRY</div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6"></div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 d-flex flex-row">
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
                  <Link className="dropdown-item " to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">Segment</p>
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="my-2 px-3">Trade Type</p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-6 ">
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Buy
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Sell
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="my-2 px-3">Trade Brokerage</p>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 ">
                  <div className="form-check my-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Without brokerage
                    </label>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">Script Name</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Script
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
                  <Link className="dropdown-item " to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">Lot</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Lot
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
                  <Link className="dropdown-item " to="/">
                    Select Market
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">Qty</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Qty
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
                  <Link className="dropdown-item " to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 ">
            <p className="m-2">Price</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Price
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
                  <Link className="dropdown-item " to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">Client</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Select Client
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
                  <Link className="dropdown-item " to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-8 col-lg-10 col-xl-10"></div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-center my-1">
            <button type="button" className="btn btn-lg bg-brown color-white w-100">
              Submit
            </button>
          </div>
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

      <div className="my-3">
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
                <Link className="dropdown-item " to="/">
                  1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item " to="/">
                  5
                </Link>
              </li>
              <li>
                <Link className="dropdown-item " to="/">
                  9
                </Link>
              </li>
            </ul>
          </div>
        </span>
        ENTRIES
      </div>

      <Table />
    </>
  );
};

export default Trade_Entry;


