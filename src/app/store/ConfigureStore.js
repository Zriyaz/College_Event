import {createStore , applyMiddleware} from "redux"
import {reactReduxFirebase, getFirebase} from "react-redux-firebase"
import {reduxFirestore,getFirestore} from "redux-firestore"
import rootReducer from "../Reducers/RootReducer" 
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import firebase from  "../config/firebase"

const rrfConfig={
  userProfile : 'users',
  attachAuthReady :  true,
  useFirestoreForProfile : true,
}
export const ConfigureStore=()=>{

  const middlewares = [thunk.withExtraArgument({getFirebase , getFirestore})]

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase , rrfConfig),reduxFirestore(firebase))
  const store=createStore(rootReducer , composedEnhancer)

  return store
}

