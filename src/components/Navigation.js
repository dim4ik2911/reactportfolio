import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />

      <label
        id="hamburger"
        htmlFor="menu__toggle"
        // onClick={className !== "open" ? (className = "open") : ""}
        className={isOpen ? "open" : null}
        onClick={toggleOpen}
      >
        {" "}
        <svg width="$xl-size" height="$xl-size" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </label>

      <div className="menu__box">
        <div className="menu__items">
          <NavLink
            className="menu__item"
            exact
            to="/"
            activeClassName="is-active"
          >
            Home
          </NavLink>
          <NavLink
            className="menu__item"
            to="/create"
            activeClassName="is-active"
          >
            About
          </NavLink>
          <NavLink
            className="menu__item"
            to="/edit"
            activeClassName="is-active"
          >
            Projects
          </NavLink>
          <NavLink
            className="menu__item"
            to="/help"
            activeClassName="is-active"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
// <ul className="menu__box">
// <div className="menu__items">
//   <li>
//     <a className="menu__item" href="#">
//       Home
//     </a>
//   </li>
//   <li>
//     <a className="menu__item" href="#">
//       About
//     </a>
//   </li>
//   <li>
//     <a className="menu__item" href="#">
//       Projects
//     </a>
//   </li>
//   <li>
//     <a className="menu__item" href="#">
//       Contact
//     </a>
//   </li>
// </div>
// </ul>
