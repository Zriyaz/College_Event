import eventReducer from "../../features/events/eventReducer"
import {combineReducers} from "redux"
import {reducer as ToastrReducer} from 'react-redux-toastr'
import {reducer as FormReducer} from "redux-form"
import testReducer from "../../features/testarea/testReducer"
import ModelReducer from "../../features/modals/ModelReducer"
import authReducer from "../../features/auth/AuthReducer"
import asyncReducer from "../../features/async/asyncReducer"


const rootReducer = combineReducers({
	form : FormReducer,
	test:testReducer,
	events: eventReducer,
	modals : ModelReducer,
	auth: authReducer,
	Async :asyncReducer,
	toastr : ToastrReducer 
})

export default rootReducer 