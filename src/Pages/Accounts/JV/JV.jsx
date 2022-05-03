import React from "react";
import "./JV.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JV = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
            JV
          </div>
          <div className="col-3 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>

          <div className="col-2 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>
          <div className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 d-flex flex-row">
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3">
            <div className="container-fluid ps-0">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Transaction Type
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Recipt
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Payment
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <div className="input-group">
              <label
                className="input-group-text bg-transparent border-none"
                htmlFor="inputGroupSelect01"
              >
                From Account
              </label>
              <select
                className="form-select input-border"
                id="inputGroupSelect01"
              >
                <option className="">Select From Account</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-end text-sm-end text-md-end my-1">
            <span className="color-brown fw-bold"> Balance:</span>
            <span className="color-blue fw-bold"> 0.00(Cr)</span>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 my-3">
            <div className="input-group">
              <label
                className="input-group-text bg-transparent border-none"
                htmlFor="inputGroupSelect01"
              >
                To Account
              </label>
              <select
                className="form-select input-border"
                id="inputGroupSelect01"
              >
                <option className="">Select To Account</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-end text-sm-end text-md-end my-3">
            <span className="color-brown fw-bold"> Balance:</span>
            <span className="color-blue fw-bold"> 0.00(Cr)</span>
          </div>

          <div className="col-2">
            <label
              className="input-group-text bg-transparent border-none"
              htmlFor="inputGroupSelect01"
            >
              Date
            </label>
          </div>
          <div className="col-7">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                className="form-control"
                placeholder="04-07-2022"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <span
                className="input-group-text bg-transparent hover-effect"
                id="addon-wrapping"
              >
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
            </div>
          </div>
          <Link to="/" className="col-3 color-blue fw-bold dec-none">
            Show entries
          </Link>

          <div className="col-12 my-4">
            <div className="input-group">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                Amount
              </span>
              <input
                type="text"
                className="form-control input-border"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-12 my-3">
            <div className="input-group">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                Remarks
              </span>
              <input
                type="text"
                className="form-control input-border"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="col-12 text-end my-2">
            <button
              type="button"
              className="btn bg-brown mx-4 color-white btn-lg focus-none button-effect my-1"
            >
              Submit
            </button>
            <button
              type="button"
              className="btn bg-primary mx-4 color-white btn-lg focus-none button-effect my-1"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JV;
