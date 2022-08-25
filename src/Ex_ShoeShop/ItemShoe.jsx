import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from "./redux/const/shoeConstants";

class ItemShoe extends Component {
  render() {
    let { name, image } = this.props.detail;
    return (
      <div className="card col-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title h-25">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => {
                this.props.handleAddToCart(this.props.detail);
              }}
              ref="#"
              className="btn"
              style={{ backgroundColor: "#FF4569", color: "white" }}
            >
              Add to cart
            </button>
            <button
              data-type="increase"
              onClick={(e) => {
                this.props.handleViewDetail(this.props.detail);
              }}
              href="#"
              className="btn btn-dark"
              data-toggle="modal"
              type="button"
              data-target="#myModal"
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (value) => {
      dispatch({
        type: ADD_TO_CART,
        payload: value,
      });
    },
    handleViewDetail: (value) => {
      dispatch({
        type: VIEW_DETAIL,
        payload: value,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShoe);
