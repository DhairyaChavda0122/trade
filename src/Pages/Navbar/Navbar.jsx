import React from "react";
import "./Navbar.css";
import tradeLogo from "./STOCK COIN LOGO-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  Dashboard
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  <div className="btn-group">
                    <button
                      type=""
                      className="btn dropdown-toggle color-white focus-none"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Trading
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Watchlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Trades
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Portfolio/Position
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Banned/blocked Scripts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Margin Management
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  Forex/Comex
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  User
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  Log
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  Accounts
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
                  aria-current="page"
                >
                  <span className="float-start ">
                    <FontAwesomeIcon
                      icon={faArrowTrendUp}
                      color="white"
                      className="ps-2"
                    />
                  </span>
                  Report
                  <span className="float-end ">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      color="white"
                      className="pe-2"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
