import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
