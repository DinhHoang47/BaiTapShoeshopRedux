import React, { Component } from "react";
import CartModal from "./CartModal";
import { shoeArr } from "./data_shoe";
import Header from "./Header";
import ListShoe from "./ListShoe";
import ViewDetailModal from "./ViewDetailModal";

class Ex_ShoeShop extends Component {
  state = {
    shoeArr: shoeArr,
    detailShoe: shoeArr[0],
    cartList: [],
  };
  handleViewDetail = (shoe) => {
    this.setState({ detailShoe: shoe });
  };
  handleAddToCart = (shoe) => {
    let id = shoe.id;
    let itemId = this.state.cartList.findIndex((x) => x.id === id);
    let cloneCart = [...this.state.cartList];
    if (itemId == -1) {
      shoe.inCartQuantity = "1";
      cloneCart.push(shoe);
    } else {
      shoe.inCartQuantity++;
    }
    this.setState({
      cartList: cloneCart,
    });
  };
  handleChangeQuantity = (action, id) => {
    let itemId = id;
    let cloneCart = [...this.state.cartList];
    let item = cloneCart.find((item) => item.id == itemId);
    let itemIndex = cloneCart.findIndex((x) => x.id == itemId);
    if (action == "increase") {
      item.inCartQuantity++;
    } else {
      if (item.inCartQuantity == 1) {
        item.inCartQuantity--;
        cloneCart.splice(itemIndex, 1);
      } else {
        item.inCartQuantity--;
      }
    }
    this.setState({
      cartList: cloneCart,
    });
  };
  handleDeleteItem = (id) => {
    let cloneCart = [...this.state.cartList];
    let deleteIndex = cloneCart.findIndex((x) => x.id == id);
    cloneCart.splice(deleteIndex, 1);
    this.setState({
      cartList: cloneCart,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <CartModal
        // handleDeleteItem={this.handleDeleteItem}
        // changeQuantityInCart={this.handleChangeQuantity}
        />
        <ListShoe />
        <ViewDetailModal />
      </div>
    );
  }
}

export default Ex_ShoeShop;
