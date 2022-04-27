import React from "react";
import "./Trades.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Table/Table";

const Trades = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0">
            <div className="form-check ">
              <input
                className="form-check-input focus-none bg-orange"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label " for="flexCheckChecked">
                PENDING ORDERS
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input focus-none bg-orange color-black"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                EXECUTED ORDERS
              </label>
            </div>
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">TRADE AFTER</p>
            <a
              href="/"
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
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">TRADE BEFORE</p>
            <a
              href="/"
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
            </a>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">SELECT MARKET</p>
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
                  <a className="dropdown-item" href="#">
                    Select Market
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
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">SELECT SCRIPT</p>
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
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2 ">
            <p className="m-2">ORDER TYPE</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Select Order Type
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
      <div class="container-fluid my-5">
        <div class="row">
          <div class="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center my-1">
            <button
              type="button"
              class="btn btn-primary text-center btn-lg fs-6"
            >
              FIND ORDER
            </button>
          </div>
          <div class="col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center my-1">
            <button type="button" class="btn btn-info text-center btn-lg fs-6">
              CLEAR FILTER
            </button>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 my-1">
            <form className="container-fluid ">
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
        <p>
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
                  <a className="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    5
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    9
                  </a>
                </li>
              </ul>
            </div>
          </span>
          ENTRIES
        </p>
      </div>
      
      <Table />
    </>
  );
};

export default Trades;
