import React from "react";
import "./Watchlist.css";
import Table from "../../Components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Watchlist = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 text-start p-0 m-0 fs-small">
            <span>
              SNX:58.533.67 <span>-</span> 590.02
            </span>
            <p>
              NFT:17.468.90 <span>-</span> 143.60
            </p>
          </div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
            <p className="m-2">SEGMENT</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                NSEFUT
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <p className="m-2">SCRIPT</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                NIFTY
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <p className="m-2">EXPIRY</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                31-03-2022
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <p className="m-2">CE/PE</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
            <p className="m-2">STRIKE</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Select...
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
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Watchlist;
