import {createReducer} from "../../app/common/util/reducerUtils"
import {MODEL_OPEN , MODEL_CLOSE} from "./ModelConstant"

const initialState = null


const openModel = (state, payload) =>{
	const {modelType , modelProps} = payload
	return {modelType , modelProps}
}

const closeModel = (state) =>{
	return null
}

export default createReducer(initialState , {
	[MODEL_OPEN]: openModel,
	[MODEL_CLOSE]: closeModel

})