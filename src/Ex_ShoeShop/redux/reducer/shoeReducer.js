import { shoeArr } from "../../data_shoe";
import { VIEW_DETAIL } from "../const/shoeConstants";

const initialState = {
  shoeArr: shoeArr,
  detailShoe: [0],
  cartList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAIL:
      state.detailShoe = action.payload;
      console.log("state.detailShoe: ", state.detailShoe);
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};
