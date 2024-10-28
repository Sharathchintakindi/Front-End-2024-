import { combineReducers } from "redux";
import petCounter from "./petCounter";
import petFavorite from "./petFavourite";
import users from "./users";

const reducers = combineReducers({
  petCounter,
  petFavorite,
  users,
});

export default reducers;
