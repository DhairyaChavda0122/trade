import React from "react";
import Table from "../../Components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const M2M = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0 fs-5">
            M2M ALERTS
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
      <div className="my-3">
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
                <Link className="dropdown-item" to="#">
                  1
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  5
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  9
                </Link>
              </li>
            </ul>
          </div>
        </span>
        ENTRIES
      </div>
      <Table />
    </>
  );
};

export default M2M;
