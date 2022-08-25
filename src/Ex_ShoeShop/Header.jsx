import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#ff80ab", marginBottom: 67, height: 67 }}
        className="container fixed-top"
      >
        <nav style={{ height: "100%" }} className="navbar align-items-center">
          <div className="">
            <img
              style={{ height: "51px" }}
              src="https://seeklogo.com/images/P/Pink_Panther-logo-309B8AC122-seeklogo.com.png"
            />
            <span
              className="pl-4"
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "51px",
              }}
            >
              Alice's Shoe Shop
            </span>
          </div>
          <div>
            <a
              style={{
                backgroundColor: "#ff4569",
                color: "white",
                fontWeight: 500,
              }}
              className="btn "
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Show/Hide Cart
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
