import React from "react";
import "./Trades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Trading-Tables/Table-trades-trading";
import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";
import Calender from "../../Components/Calender/Calender";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";


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
              <label className="form-check-label " htmlFor="flexCheckChecked">
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
              <label className="form-check-label" htmlFor="flexCheckDefault">
                EXECUTED ORDERS
              </label>
            </div>
          </div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
            <Search />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center">
            <Notifications />
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">TRADE AFTER</p>
            <Calender />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
            <p className="m-2">TRADE BEFORE</p>
            <Calender />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">SELECT MARKET</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Select Market
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
          <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-2">
            <p className="m-2">SELECT SCRIPT</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Select...
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-2 ">
            <p className="m-2">ORDER TYPE</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Order Type
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
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center my-1">
            <button
              type="button"
              className="btn btn-primary text-center btn-lg fs-6"
            >
              FIND ORDER
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center my-1">
            <button
              type="button"
              className="btn btn-info text-center btn-lg fs-6"
            >
              CLEAR FILTER
            </button>
          </div>
        </div>
      </div>
      <div>
        SHOW
        <span>
          <SelectEntry />
        </span>
        ENTRIES
      </div>
      <Table />
    </>
  );
};

export default Trades;
