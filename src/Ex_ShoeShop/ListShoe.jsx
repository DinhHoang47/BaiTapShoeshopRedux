import React, { Component } from "react";
import { connect } from "react-redux";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 67 }}>
        <div className="row">
          {this.props.data.map((item, index) => {
            return <ItemShoe key={index.toString() + index} detail={item} />;
          })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
