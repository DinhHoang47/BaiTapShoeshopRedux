import React, { Component } from "react";
import { useEffect } from "react";
import ShoeItems from "./ShoeItems";
class NewListShoe extends Component {
  splitArr() {
    let originArr = [...this.props.data];
    let newArr = [];
    while (originArr.length) {
      newArr.push(originArr.splice(0, 4));
    }
    return newArr;
  }
  renderButtom = () => {
    let splittedArr = this.splitArr();
    let active = "";
    return (
      <ul
        className="d-flex justify-content-center nav nav-pills mb-3 mt-5"
        id="pills-tab"
        role="tablist"
      >
        {splittedArr.map((item, index) => {
          if (index == 0) {
            active = "active";
          } else {
            active = "";
          }
          return (
            <li key={index.toString() + index} className="nav-item">
              <a
                className={"nav-link " + active}
                id={"pills-" + index}
                data-toggle="pill"
                href={"#pills-" + index}
                role="tab"
                aria-selected="false"
              >
                {index + 1}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
  renderItemsList = () => {
    let splittedArr = this.splitArr();
    return (
      <div className="tab-content" id="pills-tabContent">
        {splittedArr.map((item, index) => {
          let active = "";
          if (index == 0) {
            active = "active";
          } else {
            active = "";
          }
          return (
            <div
              key={index.toString() + index}
              className={"tab-pane fade show " + active}
              id={"pills-" + index}
              role="tabpanel"
              aria-labelledby={"pills-" + index + "-tab"}
            >
              <ShoeItems
                handleAddToCart={this.props.handleAddToCart2}
                data={splittedArr[index]}
              />
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div className="container">
        <this.renderItemsList />
        <this.renderButtom />
      </div>
    );
  }
}

export default NewListShoe;
