import React, { Component } from "react";

class CartModal extends Component {
  renderTbody = () => {
    return this.props.cartListData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price} $</td>
          <td>
            <img style={{ width: 50 }} src={item.image} alt="" />
          </td>
          <td>
            <button
              data-id={item.id}
              data-type="decrease"
              onClick={(e) => {
                this.props.changeQuantityInCart(
                  e.target.getAttribute("data-type"),
                  e.target.getAttribute("data-id")
                );
              }}
              className="btn btn-light btn-outline-dark"
            >
              -
            </button>
            <span className="px-3">{item.inCartQuantity}</span>
            <button
              data-id={item.id}
              data-type="increase"
              onClick={(e) => {
                this.props.changeQuantityInCart(
                  e.target.getAttribute("data-type"),
                  e.target.getAttribute("data-id")
                );
              }}
              className="btn btn-light btn-outline-dark"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleDeleteItem(item.id);
              }}
              className="btn btn-warning"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          border: "1px solid #ff4569",
          marginTop: "67px",
          backgroundColor: "rgba(245, 232, 239, 0.8)",
        }}
        className="container collapse fixed-top"
        id="collapseExample"
      >
        <div
          style={{ backgroundColor: "rgba(245, 232, 239, 0.8)" }}
          className="card card-body"
        >
          <h2>Cart List</h2>
          <p></p>
          <table className="table">
            <thead>
              <tr>
                <th>Shoe</th>
                <th>Price</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
          </table>
          {this.props.cartListData.length == 0 && (
            <p className="my-5 text-center">Chưa có sản phẩm trong giỏ hàng</p>
          )}
        </div>
      </div>
    );
  }
}

export default CartModal;
