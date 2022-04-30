import React from "react";
import "./Add_Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Add_Account = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
            ADD ACCOUNT
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

      <div className="container text-center my-3 fw-bold">Basic Details</div>

      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
            <div className="input-group">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                Account Code *
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 my-2">
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                Account Name*
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
          <div className="col-12 my-2">
            <div className="input-group">
              <label
                className="input-group-text bg-transparent border-none"
                for="inputGroupSelect01"
              >
                Account Type
              </label>
              <select
                className="form-select input-border"
                id="inputGroupSelect01"
              >
                <option className="">Select Account Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 my-3">
            <div className="container-fluid ps-0">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      for="inputGroupSelect01"
                    >
                      Opening Balance
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Credit
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Debit
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 my-3">
            <input
              type="text"
              className="form-control input-border"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="col-12 my-3">
            <div className="input-group">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                Password *
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

          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 text-center mt-4">
            Segments
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 my-3">
            <div className="container">
              <div className="row">
                <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label "
                      for="flexRadioDefault1"
                    >
                      MCX
                    </label>
                  </div>
                  <div className="bg-orange w-50 color-orange py-3 input-border">
                    s
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label "
                      for="flexRadioDefault1"
                    >
                      NSE
                    </label>
                  </div>
                  <div className="bg-orange w-50 color-orange py-3 input-border">
                    s
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label "
                      for="flexRadioDefault1"
                    >
                      NOPT
                    </label>
                  </div>
                  <div className="bg-orange w-50 color-orange py-3 input-border">
                    s
                  </div>
                </div>
                <div className="col-8 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label "
                      for="flexRadioDefault1"
                    >
                      NCDS
                    </label>
                  </div>
                  <div className="bg-orange w-50 color-orange py-3 input-border">
                    s
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 my-3">
            <div className="input-group">
              <span
                className="input-group-text bg-transparent border-none"
                id="basic-addon1"
              >
                My Partnership
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

          <div className="col-12 text-end">
            <button type="button" class="btn bg-brown color-white btn-lg focus-none button-effect">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Account;
