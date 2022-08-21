import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

class ListShoe extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 67 }}>
        <div className="row">
          {this.props.data.map((item, index) => {
            return (
              <ItemShoe
                handleViewDetail={this.props.handleViewDetail}
                handleAddToCart={this.props.handleAddToCart}
                key={index.toString() + index}
                detail={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListShoe;
