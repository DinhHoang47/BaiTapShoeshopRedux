import { shoeArr } from "../../data_shoe";
import { ADD_TO_CART, VIEW_DETAIL } from "../const/shoeConstants";

const initialState = {
  shoeArr: shoeArr,
  detailShoe: [0],
  cartList: [],
};

export default (state = initialState, action) => {
  let clonedState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case VIEW_DETAIL:
      clonedState.detailShoe = action.payload;
      return clonedState;
    case ADD_TO_CART:
      let idToAdd = action.payload.id;
      let inCartIndex = clonedState.cartList.findIndex((x) => x.id === idToAdd);
      if (inCartIndex == -1) {
        action.payload.inCartQuantity = 1;
        clonedState.cartList.push(action.payload);
      } else {
        clonedState.cartList[inCartIndex].inCartQuantity++;
      }
      return clonedState;
    default:
      return state;
  }
};
