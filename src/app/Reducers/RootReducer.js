import eventReducer from "../../features/events/eventReducer"
import {combineReducers} from "redux"
import {reducer as ToastrReducer} from 'react-redux-toastr'
import {reducer as FormReducer} from "redux-form"
import testReducer from "../../features/testarea/testReducer"
import ModelReducer from "../../features/modals/ModelReducer"
import authReducer from "../../features/auth/AuthReducer"
import asyncReducer from "../../features/async/asyncReducer"
import {firebaseReducer} from "react-redux-firebase"
import {firestoreReducer} from "redux-firestore"


const rootReducer = combineReducers({
  firebase : firebaseReducer,
  firestore : firestoreReducer,
	form : FormReducer,
	test:testReducer,
	events: eventReducer,
	modals : ModelReducer,
	auth: authReducer,
	Async :asyncReducer,
	toastr : ToastrReducer 
})

export default rootReducer 