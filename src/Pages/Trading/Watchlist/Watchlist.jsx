import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Watchlist = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0 fs-5">LEGDE REPORT</div>
          <div className="col-6"></div>
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
        <div class="row">
          <div class="col-3">
          <a
              href="/"
              className="nav-link border text-center my-2 py-3  navbar-border-radius bg-orange color-white"
              aria-current="page"
            >
              NIFTY
              <span className="float-end ">
                {/* <FontAwesomeIcon
                  icon={}
                  color="white"
                  className="pe-2"
                /> */}
              </span>
            </a>
          </div>
          <div class="col-3">Column</div>
          <div class="col-2">Column</div>
          <div class="col-2">Column</div>
          <div class="col-2">Column</div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
