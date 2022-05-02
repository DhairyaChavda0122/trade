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
import { Link } from "react-router-dom";

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
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faArrowTrendUp}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Dashboard
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trades
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Executed Options
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Running Orders
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Summary Reports
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              M2M Alerts
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              User
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trade Entry
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faEye}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Trading
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Watchlist
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trades
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Portfolio/Position
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Banned/Blocked Scripts
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Margin Management
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Forex/Comex
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Watchlist
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trades
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Portfolio/Position
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Margin Management
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      User
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              All UserList
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              UserList
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Add Account
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faBook}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Log
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trade Edit/ Delete Log
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              User Edit Log
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Auto Square Up Log
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Cross Trade Log
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Rejection Log
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faUser}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Accounts
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Cash Ledge
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Cash Entry
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              JV
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              JV Broker
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Deposit Entry
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Valan
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <div className="row height-button bg-orange">
                    <div className="col-2 text-start my-3">
                      <FontAwesomeIcon
                        icon={faAddressBook}
                        color="white"
                        className="ps-2"
                      />
                    </div>
                    <div className="col-8 color-white my-3 text-center">
                      Report
                    </div>
                    <div className="col-2 my-3 dropdown">
                      <button className="dropbtn bg-transparent border-none text-start p-0">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                      </button>
                      <div className="dropdown-content ">
                        <ul className="list-group bg-light navbar-border-radius-2">
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Track Report
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Ledge Report
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Deposit Report
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Trial Balances
                            </Link>
                          </li>
                          <li className="list-group-item no-dec text-start">
                            <Link
                              to="/trade/dashboard"
                              className="text-start no-dec text-dark"
                            >
                              Client Cr/Dr Report
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
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
