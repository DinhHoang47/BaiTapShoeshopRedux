import React, { Component } from "react";

class ViewDetail extends Component {
  render() {
    let { image, name, price, description } = this.props.detailShoe;
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <img className="w-100" src={image} alt="" />
          </div>
          <div className="col-8 text-primary">
            <p>Tên: {name} </p>
            <p>Giá : {price} </p>
            <p>Mô tả : {description} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewDetail;
