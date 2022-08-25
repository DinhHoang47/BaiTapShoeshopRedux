import React, { Component } from "react";
import { connect } from "react-redux";

class ViewDetailModal extends Component {
  render() {
    console.log("render detail");
    let { image, name, price, description } = this.props.detailShoe;
    return (
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{name}</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="row">
                <div className="col-4 d-flex align-items-center flex-column">
                  <img className="w-100 my-auto" src={image} alt="" />
                  <p className="text-primary">Price: {price} $</p>
                </div>
                <div className="col-8">
                  <p className="text-left">{description}</p>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detailShoe: state.shoeReducer.detailShoe,
  };
};

export default connect(mapStateToProps)(ViewDetailModal);
