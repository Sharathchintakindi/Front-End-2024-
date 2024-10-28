import { all } from "redux-saga/effects";
import watcherUserSage from "./handlers/fetchUsers";

export default function* rootSaga(){
  yield all([watcherUserSage()])
}