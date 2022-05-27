import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Calender from "../../Components/Calender/Calender";
import Search from "../../Components/Search/Search";
import SelectEntry from "../../Components/Select-Entry/Select-Entry";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Cash_Entry = () => {
  return (
    <>
      <Fade right bottom>
        <div className="container">
          <div className="row my-2">
            <div className="col-3 col-sm-3 col-md-6 col-lg-4 col-xl-4 fw-bold">
              Cash Entry
            </div>
            <div className="col-4 col-sm-3 col-md-1 col-lg-5 col-xl-5"></div>

            <div className="col-6 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-center">
              <Notifications />
            </div>
            <div className="col-6 col-sm-3 col-md-2 col-lg-2 col-xl-2">
              <UserLogo />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center my-3">
            <div className="col-3">Transaction Type</div>
            <div className="col-2 col-xs-5 col-sm-4 col-md-2">
              <div className="form-check my-1">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Cash Receipt
                </label>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-xs-4 col-md-2">
              <div className="form-check my-1">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Cash Payment
                </label>
              </div>
            </div>
            <div className="col-md-5 col-sm-1"></div>
          </div>

          {/* cash code */}
          <div className="row align-items-center my-3">
            <div className="col-3">Cash Code</div>
            <div className="col-5">
              <select
                className="form-select input-border focus-none"
                id="inputGroupSelect01"
              >
                <option className="">KP</option>
                <option value="1">KPPK</option>
              </select>
            </div>
            <div className="col-3">
              <span>Balance : 0.00 (Cr)</span>
            </div>
            <div className="col-1"></div>
          </div>

          {/* date */}
          <div className="row align-items-center my-3">
            <div className="col-3">Date</div>
            <div className="col-5">
              <input type="date" className="w-100 p-1 " />
            </div>
            <div className="col-3">
              <span>Show Entries</span>
            </div>
            <div className="col-1"></div>
          </div>

          {/* Select Client */}
          <div className="row align-items-center my-3">
            <div className="col-3">Select Client</div>
            <div className="col-5">
              <select
                className="form-select input-border focus-none"
                id="inputGroupSelect01"
              >
                <option className="">AQ-JIGNESH</option>
                <option value="1">GW-VIRAJ</option>
                <option value="1">KP11-MAHESH</option>
              </select>
            </div>
            <div className="col-3">
              <span>Balance : 0.00 (Cr)</span>
            </div>
            <div className="col-1"></div>
          </div>

          {/* Amount */}
          <div className="row align-items-center my-3">
            <div className="col-3">Amount</div>
            <div className="col-5">
              <input type="text" className="w-100" />
            </div>

            <div className="col-4"></div>
          </div>

          {/* Remarks */}
          <div className="row align-items-center my-3">
            <div className="col-3">Remark</div>
            <div className="col-5">
              <textarea rows={2} type="text" className="w-100" />
            </div>

            <div className="col-4"></div>
          </div>

          <div className="row align-items-center my-3">
            <div className="col-3">Amount</div>
            <div className="col-5">
              <input type="text" className="w-100" />
            </div>

            <div className="col-4"></div>
          </div>

          {/* buttons */}
          <div className="row align-items-center my-3">
            <div className="col-3"></div>
            <div className="col-1">
              <button type="button" class="btn btn-primary w-100">
                Save
              </button>
            </div>
            <div className="col-1">
              <button type="button" class="btn btn-primary w-100">
                Delete
              </button>
            </div>
            <div className="col-1">
              <button type="button" class="btn btn-primary w-100">
                Clear
              </button>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

        <div className="container mt-5">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Cash Code</th>
                <th scope="col">Account Code</th>
                <th scope="col">Account Name</th>
                <th scope="col">Type</th>
                <th scope="col">TrDt</th>
                <th scope="col">Voucher No</th>
                <th scope="col">Amount</th>
                <th scope="col">Remarks</th>
                <th scope="col">Added By</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        {/* <div className="container border border-primary">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Transaction Type
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
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
                              Cash Receipt
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
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
                              Cash Payment
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Cash Code
                    </label>
                    <select
                      className="form-select input-border focus-none"
                      id="inputGroupSelect01"
                    >
                      <option className="">KP</option>
                      <option value="1">KPPK</option>
                    </select>
                  </div>
                </div>

                <div className="col-6">Balance : 0.00 (Cr)</div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Valan
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">APROI NSE</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-6 my-2">
              <div className="form-check my-1 float-end">
                <input
                  className="form-check-input focus-none"
                  type="radio"
                  name="flexRadioDefault01"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Customer
                </label>
              </div>
            </div>

            <div className="col-6 my-2">
              <div className="form-check my-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault01"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label focus-none"
                  htmlFor="flexRadioDefault1"
                >
                  Self
                </label>
              </div>
            </div>

            <div className="col-12 my-3">
              <div className="input-group">
                <span
                  className="input-group-text bg-transparent border-none"
                  id="basic-addon1"
                >
                  Customer *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Client"
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
                  Master *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Master"
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
                  Script *
                </span>
                <input
                  type="text"
                  className="form-control input-border focus-none"
                  placeholder="Select Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Without Bokerage
                    </label>
                  </div>
                </div>
                <div className="col-6 col-sm-8 col-md-8 col-lg-10 col-xl-10">
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input focus-none"
                            type="radio"
                            name="flexRadioDefault0000"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Segment
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Segment</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3">
              <div className="container-fluid ps-0">
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-4 col-lg-2 col-xl-2 ">
                    <div className="input-group">
                      <label
                        className="input-group-text bg-transparent border-none"
                        htmlFor="inputGroupSelect01"
                      >
                        Data Filter
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault99"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              All Date
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                          <div className="form-check my-1">
                            <input
                              className="form-check-input focus-none"
                              type="radio"
                              name="flexRadioDefault99"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Data Wise
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-2">
              <div className="input-group">
                <label
                  className="input-group-text bg-transparent border-none"
                  htmlFor="inputGroupSelect01"
                >
                  Broker
                </label>
                <select
                  className="form-select input-border focus-none"
                  id="inputGroupSelect01"
                >
                  <option className="">Select Broker</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                  <div className="input-group">
                    <label
                      className="input-group-text bg-transparent border-none"
                      htmlFor="inputGroupSelect01"
                    >
                      Expiry Date
                    </label>
                  </div>
                </div>
                <div className="col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10">
                  <div className="container">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 ">
                        <div className="form-check my-1">
                          <input
                            className="form-check-input focus-none"
                            type="radio"
                            name="flexRadioDefault789"
                            id="flexRadioDefault1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-end my-2">
              <button
                type="button"
                className="btn bg-brown mx-4 color-white btn-lg focus-none button-effect my-1"
              >
                View Report
              </button>
            </div>
          </div>
        </div> */}
      </Fade>
    </>
  );
};

export default Cash_Entry;
