import React, { Component } from "react";
import { connect } from "react-redux";

class ViewDetail2 extends Component {
  render() {
    let { image, name, price } = this.props.detailShoe;
    return (
      <div className="container mt-5">
        <img style={{ width: 100 }} className="my-auto" src={image} alt="" />
        <h4 className="">{name}</h4>
        <h4 className="">{price}</h4>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detailShoe: state.shoeReducer.detailShoe,
  };
};

export default connect(mapStateToProps)(ViewDetail2);
