import { call,put,takeEvery } from "redux-saga/effects";
import fetchGetUsers from "../requests/fetchUsers";


function* handleGetUsers(){
  try{
  const users = yield call(fetchGetUsers)
  yield put({type: "GET_USERS_SUCCESS", users:users})
  }catch(err){
    yield put({type:"GET_USERS_FAILED",message:err.message})
  }
}

function* watcherUserSage() {
  yield takeEvery("GET_USERS_REQUESTED",handleGetUsers)
}

export default watcherUserSage