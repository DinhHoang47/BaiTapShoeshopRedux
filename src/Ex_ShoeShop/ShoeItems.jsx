import React, { Component } from "react";

class ShoeItems extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((item) => {
            let { name, image } = item;
            return (
              <div className="card col-3">
                <div className="custom-card">
                  <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 style={{ height: 48 }} className="card-title">
                      {name}
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex justify-content-around">
                      <button
                        // onClick={this.props.handleAddToCart(item)}
                        ref="#"
                        className="btn btn-primary"
                      >
                        Add to cart
                      </button>
                      <button
                        data-type="increase"
                        href="#"
                        className="btn btn-dark"
                      >
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoeItems;
