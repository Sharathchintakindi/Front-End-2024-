import { combineReducers } from "redux";
import CakeReducer from "./cakes/cakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./user/userReducer";

const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer,
});

export default RootReducer;
