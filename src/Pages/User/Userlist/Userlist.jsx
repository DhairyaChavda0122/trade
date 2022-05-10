import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import { Link } from "react-router-dom";

const Userlist = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <p className="m-2">BROKER</p>
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Select Broker
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
                        <Link className="dropdown-item" to="/">
                          Select Market
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
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <p className="m-2">STATUS</p>
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Select Status
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
                        <Link className="dropdown-item" to="/">
                          Select Market
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
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                  <p className="m-2">PARANTS</p>
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Select Parants
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
                <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                  <p className="m-2">TYPE</p>
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Select Type
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
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-center">
            <button type="button" className="btn bg-brown color-white mt-5">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center">
            <button type="button" className="btn bg-primary color-white w-100">
              +Add Account
            </button>
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
    </>
  );
};

export default Userlist;
