const { createStore, combineReducers, applyMiddleware } = require("redux")
const { createLogger } = require("redux-logger")

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

const logger = createLogger()

function buyCake(){
  return{
    type:BUY_CAKE,
    info:"First redux example"
  }
}

function buyIceCream(){
  return{
    type:BUY_ICECREAM,
    info:"Icre cream"
  }
}

const initialState = {
  numOfCakes:10,
  numOfIceCream:20
}

const cakeReducer = (state = initialState, action)=>{
  switch(action.type){
    case BUY_CAKE :
      return{
        ...state,
        numOfCakes: state.numOfCakes-1
      }
      default:return state
    }
  }

  const iceCreamReducer = (state=initialState,action)=>{
    switch(action.type){
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIceCream:state.numOfIceCream-1
        }
      default:return state
    }
  }

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream : iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log("Initial State" , store.getState());
const unSubsribe = store.subscribe(()=>{})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unSubsribe()