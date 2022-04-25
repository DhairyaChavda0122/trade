import React from "react";
import Table from "../Components/Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-3 fw-bold text-start p-0 fs-5">TRADES</div>
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
            <FontAwesomeIcon icon={faBell} className="p-0 mt-1" size="2x" color="grey"/>
          </div>
          <div className="col-2 d-flex flex-row">
               <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1"/>
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

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
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
            {/* <div className="container-fluid">
              <div className="row">
                <div className="col-2 float-start">
                  <FontAwesomeIcon icon={faCircleUser} size="2x" />
                </div>
                <div className="col-5">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Timothy
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
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
            </div> */}
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Dashboard;
