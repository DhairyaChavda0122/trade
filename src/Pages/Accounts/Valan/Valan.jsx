import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import { Link } from "react-router-dom";
import Calender from "../../Components/Calender/Calender";

const Valan = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-6 col-lg-2 col-xl-2">Valan</div>
          <div className="col-9 col-sm-9 col-md-6 col-lg-7 col-xl-7 text-start">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Open
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center my-2">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 d-flex flex-row my-2">
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

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p>Market Type</p>
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p>Valan Name</p>
            <select
              className="form-select bg-orange color-white height-button focus-none"
              aria-label="Default select example"
            >
              <option
                className="bg-light text-dark ps-3"
                value="1"
                defaultValue
              >
                Valan Name
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p className="m-2">From End</p>
            <Calender />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p className="m-2">From End</p>
            <Calender />
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className="float-end btn btn-lg mx-5 btn-info "
            >
              +ADD
            </button>
          </div>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Valan;
