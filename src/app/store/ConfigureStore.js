import {createStore , applyMiddleware} from "redux"
import rootReducer from "../Reducers/RootReducer" 
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"



export const ConfigureStore=()=>{

  const middlewares = [thunk]

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))
  const store=createStore(rootReducer , composedEnhancer)

  return store
}

