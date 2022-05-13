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
  faAddressBook,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center ">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column fix">
          <Link to="/trade/trades-dashboard">
            <img
              src={tradeLogo}
              alt="Trade Logo"
              className="my-2 img-fluid"
              width="175"
              height=""
            />
          </Link>
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
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faArrowTrendUp}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Dashboard</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/trades-dashboard"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/executed"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Executed Options
                      </li>
                    </Link>
                    <Link
                      to="/trade/running"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Running Orders
                      </li>
                    </Link>
                    <Link
                      to="/trade/summary"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Summary Reports
                      </li>
                    </Link>
                    <Link
                      to="/trade/m2m"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        M2M Alerts
                      </li>
                    </Link>
                    <Link
                      to="/trade/user-dashboard"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        User
                      </li>
                    </Link>
                    <Link
                      to="/trade/trade-entry"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trade Entry
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none mt-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0 ">
                          <FontAwesomeIcon
                            icon={faEye}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Trading</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent m-0 p-0 "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/watchlist-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trade/trades-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/banned-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Banned/Blocked Scripts
                      </li>
                    </Link>
                    <Link
                      to="/trade/margin-trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Margin Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Forex/Comex</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/watchlist-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trade/trades-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/margin-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Margin Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faUserCircle}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">User</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/all-user"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        All UserList
                      </li>
                    </Link>
                    <Link
                      to="/trade/userlist"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        UserList
                      </li>
                    </Link>
                    <Link
                      to="/trade/add-account"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Add Account
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faBook}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Log</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/trade-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trade Edit/ Delete Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/user-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        User Edit Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/auto"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Auto Square Up Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/cross"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cross Trade Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/rejection"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Rejection Log
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className="btn bg-orange color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faUser}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Accounts</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/cash-ledge"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cash Ledge
                      </li>
                    </Link>
                    <Link
                      to="/trade/cash-entry"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cash Entry
                      </li>
                    </Link>
                    <Link
                      to="/trade/jv"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">JV</li>
                    </Link>
                    <Link
                      to="/trade/jv-broker"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        JV Broker
                      </li>
                    </Link>
                    <Link
                      to="/trade/deposit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Deposit Entry
                      </li>
                    </Link>
                    <Link
                      to="/trade/valan"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Valan
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className=" ">
                  <button
                    className="btn bg-orange dropup color-white height-button focus-none my-2 p-0"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faAddressBook}
                            color="white"
                            className=""
                          />
                        </div>
                        <div className="col-8">Report</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color="white"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className="dropdown-menu dpdn-class width-navbar-drop border-none bg-transparent"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Link
                      to="/trade/trade-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Track Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/ledge-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Ledge Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/deposit-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Deposit Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/trial"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trial Balances
                      </li>
                    </Link>
                    <Link
                      to="/trade/client-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Client Cr/Dr Report
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <Footer />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
