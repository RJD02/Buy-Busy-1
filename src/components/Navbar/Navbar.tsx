import React from "react";

export const Navbar = (props: {}) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1 px1">
        <a href="/" className="brand-logo">
          Buy-Busy
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Orders</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
