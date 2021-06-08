import React from "react";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary mx-40 ">
      <a class="navbar-brand text-warning " href="#">
        FE Task
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-white " href="#">
              Info<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active my-lg-0">
            <a class="nav-link text-white my-lg-0" href="#">
              Task<span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
