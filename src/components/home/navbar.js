import React from "react";

const NavBar = () => {
  return (
    <div className="navbarHome-content p-4" id="navbarHome">
      <nav className="navbar navbar-expand-lg navbar-light white-light">
        <div className="container-fluid">
          <h1>Bonjour M. TANG</h1>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-light"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-bell fa-lg mb-1"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      11
                    </span>
                  </div>
                </a>
              </li>
              <li className="nav-item text-center mx-2 mx-lg-1">
                <a className="nav-link" href="#!">
                  <div>
                    <i className="fas fa-search fa-lg mb-1 "></i>
                  </div>
                </a>
              </li>
            </ul>

            <div className="nav-item media d-flex align-items-center">
              <img
                src="http://img.over-blog-kiwi.com/3/22/80/20/20190713/ob_a80861_photo-2.jpg"
                alt="..."
                width="65"
                className="mr-3 rounded-circle shadow-sm"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
