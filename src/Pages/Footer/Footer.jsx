import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className=" bottom-0 start-0">
        <p className="mx-5">User's information</p>
        <button type="button" className="btn text-danger fs-5">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="ms-5 me-2"
          />
          Logout
        </button>
      </div>
    </>
  );
};

export default Footer;
