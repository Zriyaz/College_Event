import {INCREMENT_COUNTER} from "./TestConstant"
import {DECREMENT_COUNTER} from "./TestConstant"

export const incrementCounter = (state)=>{
	return{
		type:INCREMENT_COUNTER
	}
}
export const decrementCounter = (state)=>{
	return{
		type:DECREMENT_COUNTER
	}
}