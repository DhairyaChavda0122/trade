import React from "react";
import "./Navbar.css";
import tradeLogo from "./STOCK COIN LOGO-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faAngleDown,
  faEye,
  faDollarSign,
  faUser,
  faBook,
  faFileLines,
  faAddressBook,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-lg-row">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
          <a href="/">
            <img
              src={tradeLogo}
              alt="Trade Logo"
              width="130"
              height="80"
              className="my-2 mx-5"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
            <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      <div className="text-center">
                        Dashboard
                        <span className="float-start ">
                          <FontAwesomeIcon
                            icon={faArrowTrendUp}
                            color="white"
                            className="ps-2"
                          />
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      <div className="text-center">
                        Trading
                        <span className="float-start ">
                          <FontAwesomeIcon
                            icon={faEye}
                            color="white"
                            className="ps-2"
                          />
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      <div className="text-center">
                        Forex/Comex
                        <span className="float-start ">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            color="white"
                            className="ps-2"
                          />
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      User
                      <span className="float-start ">
                        <FontAwesomeIcon
                          icon={faUser}
                          color="white"
                          className="ps-2"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Log
                      <span className="float-start ">
                        <FontAwesomeIcon
                          icon={faBook}
                          color="white"
                          className="ps-2"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Accounts
                      <span className="float-start ">
                        <FontAwesomeIcon
                          icon={faUserCircle}
                          color="white"
                          className="ps-2"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
              <li>
                <div className="my-2 text-center">
                  <div className="btn-group w-100 height-button bg-orange">
                    <button
                      type="button"
                      className="btn color-white focus-none"
                    >
                      Reports
                      <span className="float-start ">
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          color="white"
                          className="ps-2"
                        />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="float-end pe-2">
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
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
