const redux = require("redux");
const reduxLogger =require('redux-logger');
const createStore = redux.createStore;

const combineReducers = redux.combineReducers; 
const applyMiddleWare = redux.applyMiddleware // For applying the middleWare
const logger =reduxLogger.createLogger(); // For applying the middleWare


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first Redux action",
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "first Redux action",
  }
}

// (previousState,action) = newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream:20
// };

const initialCakeState ={
  noOfCakes:10
}

const initialIceCream = {
  noOfIceCream:20
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, numOfCakes: state.noOfCakes - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return{...state,numOfIceCream:state.noOfIceCream - 1}
    default:
      return state;
  }
};

const rootReducer =combineReducers({
  cake:cakeReducer,
  iceCream : iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleWare(logger));
console.log("initial State", store.getState());
const unsubscribe = store.subscribe(() =>
{}
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
