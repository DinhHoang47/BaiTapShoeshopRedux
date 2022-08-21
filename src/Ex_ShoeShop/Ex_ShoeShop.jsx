import React, { Component } from "react";
import { shoeArr } from "./data_shoe";
import GioHang from "./GioHang";
import ListShoe from "./ListShoe";
import ViewDetail from "./ViewDetail";
import NewListShoe from "./NewListShoe";
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
  handleAddToCart2 = ()=>{
    console.log('test');
  }
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
        <GioHang
          handleDeleteItem={this.handleDeleteItem}
          changeQuantityInCart={this.handleChangeQuantity}
          cartListData={this.state.cartList}
        />
          
        {/* <NewListShoe data={this.state.shoeArr} handleAddToCart2={this.handleAddToCart2}/> */}
        <ListShoe
          data={this.state.shoeArr}
          handleAddToCart={this.handleAddToCart}
          handleViewDetail={this.handleViewDetail}
        />
        <ViewDetail detailShoe={this.state.detailShoe} />
      </div>
    );
  }
}

export default Ex_ShoeShop;
