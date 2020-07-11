import {MODEL_OPEN,MODEL_CLOSE} from "./ModelConstant"

export const openModel = (modelType , modelProps) =>{
	return{
		type: MODEL_OPEN,

		payload: {
			modelType,
			modelProps
		}
	}
}


export const closeModel = () =>{
	return{
		type: MODEL_CLOSE
	}
}
