import React from "react";
import Table from "../../Components/Trading-Tables/Table-watchlist-trading";
import Search from "../../Components/Search/Search";
import Notifications from "../../Components/Notifications/Notifications";
import UserLogo from "../../Components/UserLogo/UserLogo";
import Fade from "react-reveal/Fade";

const Running = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-3 fw-bold text-start p-0 fs-5">
              RUNNING ORDERS
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 my-3 my-sm-3 my-md-3 my-lg-0 my-xl-0">
              <UserLogo />
            </div>
          </div>
        </div>
        <Table />
      </Fade>
    </>
  );
};

export default Running;
