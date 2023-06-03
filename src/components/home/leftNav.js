import React from "react";

const LeftNav = () => {
  return (
    <div className="vertical-nav" id="sidebar">
      <div className="py-5 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
            alt="..."
            width="65"
            className="mr-3 rounded-circle shadow-sm"
          />
          <div className="media-body">
            <h4 className="m-0">Lobster</h4>
          </div>
        </div>
      </div>

      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Main
      </p>

      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="http://localhost:3000/dashboard" className="nav-link text-dark font-italic">
            <i className="fa fa-th-large mr-3 text-secondary fa-fw textNav"></i>
            Autre dashboard
          </a>
        </li>

      </ul>


      
    </div>
  );
};

export default LeftNav;
