import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Watchlist.css";
// import Table from "../../Components/Table/Table";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";

const Watchlist = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <Search />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-1 text-center">
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

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="">SEGMENT</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Forex
              </option>
              <option className="bg-light text-dark ps-3" value="2">
                One
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Two
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <p className="">SCRIPT</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                EURUSD
              </option>
              <option className="bg-light text-dark ps-3" value="2">
                One
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Two
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <p className="">SEGMENT</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Forex
              </option>
              <option className="bg-light text-dark ps-3" value="2">
                One
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Two
              </option>
              <option className="bg-light text-dark ps-3" value="3">
                Three
              </option>
            </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-1 col-xl-1">
            <button
              type="button"
              className="btn btn-lg color-white bg-brown mt-5"
            >
              +ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
