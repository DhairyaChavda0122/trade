import React from "react";
import "./Trading.css";
import Table from "../Components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCircleUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Trading = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 text-start p-0 m-0 fs-small">
            <span>
              SNX:58.533.67 <span>-</span> 590.02
            </span>
            <p>
              NFT:17.468.90 <span>-</span> 143.60
            </p>
          </div>
          <div className="col-6">
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
          <div className="col-1 text-center">
            <FontAwesomeIcon
              icon={faBell}
              className="p-0 mt-1"
              size="2x"
              color="grey"
            />
          </div>
          <div className="col-2 d-flex flex-row">
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
      <div class="container">
        <div class="row ms-1">
          <div class="col-2">SEGMENT</div>
          <div class="col-3">SCRIPT</div>
          <div class="col-3">EXPIRY</div>
          <div class="col-2">CE/PE</div>
          <div class="col-2">STRKE</div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
              aria-current="page"
            >
              NSEFUT
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
              aria-current="page"
            >
              NIFTY
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-3">
            <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
              aria-current="page"
            >
              31-03-2022
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-2">
            <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white orange-trade"
              aria-current="page"
            >
              s
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
          <div className="col-2">
            <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
              aria-current="page"
            >
              Select...
              <span className="float-end ">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="white"
                  className="pe-2"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Trading;
