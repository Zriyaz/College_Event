import {createStore} from "redux"
import rootReducer from "../Reducers/RootReducer" 
//import {devToolsEnhancer} from "redux-devtools-extension"



export const ConfigureStore=()=>{
  const store=createStore(rootReducer /*devToolsEnhancer()*/ )

  return store
}

