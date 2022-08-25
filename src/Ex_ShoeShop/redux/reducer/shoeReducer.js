import { shoeArr } from "../../data_shoe";
import {
  ADD_TO_CART,
  CHANGE_INCART_QUANTITY,
  DELETE,
  INCREASE,
  VIEW_DETAIL,
} from "../const/shoeConstants";

const initialState = {
  shoeArr: shoeArr,
  detailShoe: [0],
  cartList: [],
};

export default (state = initialState, action) => {
  let clonedState = JSON.parse(JSON.stringify(state));
  let currentCart = clonedState.cartList;
  switch (action.type) {
    case VIEW_DETAIL:
      clonedState.detailShoe = action.payload;
      return clonedState;
    case ADD_TO_CART:
      let idToAdd = action.payload.id;
      let inCartIndex = currentCart.findIndex((x) => x.id === idToAdd);
      if (inCartIndex == -1) {
        action.payload.inCartQuantity = 1;
        currentCart.push(action.payload);
      } else {
        currentCart[inCartIndex].inCartQuantity++;
      }
      return clonedState;
    case CHANGE_INCART_QUANTITY:
      let itemIndex = currentCart.findIndex((x) => x.id == action.payload.id);
      let currentIncart = currentCart[itemIndex].inCartQuantity;
      if (action.payload.type == INCREASE) {
        currentCart[itemIndex].inCartQuantity += 1;
      } else if (currentIncart != 1) {
        currentCart[itemIndex].inCartQuantity -= 1;
      } else {
        currentCart.splice(itemIndex, 1);
      }
      return clonedState;
    case DELETE:
      let deleteIndex = currentCart.findIndex((x) => x.id == action.payload);
      currentCart.splice(deleteIndex, 1);
      return clonedState;
    default:
      return state;
  }
};
