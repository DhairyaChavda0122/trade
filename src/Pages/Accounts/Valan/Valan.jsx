import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faCalendarDays,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../../Components/Table/Table";

const Valan = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-3 col-sm-3 col-md-6 col-lg-2 col-xl-2">Valan</div>
          <div className="col-9 col-sm-9 col-md-6 col-lg-7 col-xl-7 text-start">
            <div class="container">
              <div class="row">
                <div className="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Open
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
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

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p>Market Type</p>
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p>Valan Name</p>
            <div className="btn-group w-100 height-button bg-orange">
              <button type="button" className="btn color-white focus-none">
                Valan Name
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
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p className="m-2">From End</p>
            <a
              href="/"
              className="nav-link border text- my-2 py-3  navbar-border-radius bg-orange color-white "
              aria-current="page"
            >
              <span className="text-start">mm/dd/yyyyy:-</span>
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-2">
            <p className="m-2">From End</p>
            <a
              href="/"
              className="nav-link border text- my-2 py-3  navbar-border-radius bg-orange color-white "
              aria-current="page"
            >
              <span className="text-start">mm/dd/yyyyy:-</span>
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-100 ">
        <button type="button" class="float-end btn btn-lg mx-5 my-2 btn-info">
          +ADD
        </button>
      </div>
      <Table />
    </>
  );
};

export default Valan;
