import eventReducer from "../../features/events/eventReducer"
import {combineReducers} from "redux"
import {reducer as FormReducer} from "redux-form"
import testReducer from "../../features/testarea/testReducer"
import ModelReducer from "../../features/modals/ModelReducer"
import authReducer from "../../features/auth/AuthReducer"

const rootReducer = combineReducers({
	form : FormReducer,
	test:testReducer,
	events: eventReducer,
	modals : ModelReducer,
	auth: authReducer
})

export default rootReducer 